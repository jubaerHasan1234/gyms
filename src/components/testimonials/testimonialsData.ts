import React from "react";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from "./ClientAvatars";

export interface TestimonialCardData {
  id: number;
  title: string;
  comment: string;
  authorName: string;
  authorRole: string;
  rating: number;
  AvatarComponent: React.ComponentType;
}

export const TESTIMONIALS: TestimonialCardData[] = [
  {
    id: 1,
    title: "The Best Training Program!",
    comment:
      "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    authorName: "Stive meloni",
    authorRole: "Ceo Of Miko",
    rating: 4.5,
    AvatarComponent: Avatar1,
  },
  {
    id: 2,
    title: "The Best Training Program!",
    comment:
      "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    authorName: "Stive meloni",
    authorRole: "Ceo Of Miko",
    rating: 4.5,
    AvatarComponent: Avatar2,
  },
  {
    id: 3,
    title: "The Best Training Program!",
    comment:
      "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    authorName: "Stive meloni",
    authorRole: "Ceo Of Miko",
    rating: 4.5,
    AvatarComponent: Avatar3,
  },
  {
    id: 4,
    title: "The Best Training Program!",
    comment:
      "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    authorName: "Stive meloni",
    authorRole: "Ceo Of Miko",
    rating: 4.5,
    AvatarComponent: Avatar4,
  },
  {
    id: 5,
    title: "The Best Training Program!",
    comment:
      "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    authorName: "Stive meloni",
    authorRole: "Ceo Of Miko",
    rating: 4.5,
    AvatarComponent: Avatar5,
  },
  {
    id: 6,
    title: "The Best Training Program!",
    comment:
      "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    authorName: "Stive meloni",
    authorRole: "Ceo Of Miko",
    rating: 4.5,
    AvatarComponent: Avatar6,
  },
];
