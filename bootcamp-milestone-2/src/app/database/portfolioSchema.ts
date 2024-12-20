import mongoose, { Schema } from "mongoose";

type Portfolio = {
    title: string;
    slug: string;
    date: Date;
    description: string;
};

const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  slug: { type: String },
  date: { type: Date, required: false, default: new Date()},
  description: { type: String },
});

const Portfolio = mongoose.models['portfolios'] || 
    mongoose.model("portfolios", portfolioSchema);

    export default Portfolio;