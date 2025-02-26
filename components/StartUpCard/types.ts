import { Author, Startup } from "@/sanity/types";

export type StartUpTypeCard = Omit<Startup, "author"> & {
  author?: Author;
};
