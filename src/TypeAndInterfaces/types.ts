export interface IPost {
  comments: [
    {
      comment: string;
      postedBy: IPostedBy;
    }
  ];
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  postedBy: IPostedBy;
  maincontent: string;
  _createdAt: string;
  subtitle: string;
  title: string;
  _id: string;
}
interface IPostedBy {
  _ref: string;
  _type: string;
}
export interface IUser {
  username: string;
  image: string;
  _id: string;
  _createdAt: string;
}
