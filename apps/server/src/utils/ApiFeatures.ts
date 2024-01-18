const { default: mongoose } = require("mongoose");

export class ApiFeatures {
  query: any;
  queryStr: any;

  constructor(query: any, req: any) {
    (this.query = query), (this.queryStr = { ...req.query });
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword, //creating regex expression
            $options: "i", //case insensitive
          },
        }
      : {};
    const id = this.queryStr.id
      ? {
          _id: this.queryStr.id,
        }
      : {};
    const email = this.queryStr.email
      ? {
          email: this.queryStr.email,
        }
      : {};
    const userPosts = this.queryStr._id
      ? {
          Uid: this?.queryStr?._id,
        }
      : {};
    console.log(userPosts);
    this.query = this.query.find(email);
    this.query = this.query.find(userPosts);
    this.query = this.query.find(id);
    this.query = this.query.find(keyword);
    return this;
  }
  pagination(resultPerPage: number) {
    const currentpage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentpage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}
