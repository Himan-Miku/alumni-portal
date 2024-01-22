import {
  S3Client,
  PutObjectCommand,
  PutBucketCorsCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v5 as uuidv5, v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

export const setCorsOptions = async () => {
  const input = {
    Bucket: "alumni-portal-rscoe",
    CORSConfiguration: {
      CORSRules: [
        {
          AllowedHeaders: ["*"],
          AllowedMethods: ["PUT", "POST", "DELETE"],
          AllowedOrigins: ["http://localhost:3000"],
          ExposeHeaders: ["x-amz-server-side-encryption"],
          MaxAgeSeconds: 3000,
        },
        {
          AllowedHeaders: ["Authorization"],
          AllowedMethods: ["GET"],
          AllowedOrigins: ["*"],
          MaxAgeSeconds: 3000,
        },
      ],
    },
    ContentMD5: "",
  };
  const command = new PutBucketCorsCommand(input);
  await s3Client.send(command);
};

function generateUUID(namespace: string, name: string) {
  return uuidv5(name, namespace);
}

export async function getObjectUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: "alumni-portal-rscoe",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
}

export async function putObject(
  user: string,
  fileName: string,
  contentType: string
) {
  const namespace = uuidv4();
  const uuidV5 = generateUUID(namespace, fileName);
  const uuidString = uuidV5.toString();

  const key = `${user}/${uuidString.substring(0, 6)}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: "alumni-portal-rscoe",
    Key: key,
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 300 });
  return {
    url,
    objectKey: key,
  };
}
