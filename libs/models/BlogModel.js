
import mongoose,{ Schema} from "mongoose";

const DETAILS = {
  type:String,
  required:true
}
const schema = new Schema({
  title:DETAILS,
  description:DETAILS,
  category:DETAILS,
  author:DETAILS,
  date:{
    type:Date,
    default:Date.now
  }
}
)

const blog = mongoose.models.blog || mongoose.model('blog',schema)
export default blog;