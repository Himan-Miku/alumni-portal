const { default: mongoose } = require("mongoose");

export class ApiFeatures {
  query: any;
  queryStr: any;
  param: any;
  constructor(query: any, req: any) {
    (this.query = query),
      (this.queryStr = { ...req.query }),
      (this.param = { ...req.params });
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
    this.query = this.query.find(keyword);
    return this;
  }
}
