import { ImageSourcePropType } from "react-native";

export interface Place {
    id: number;
    name: string;
    category: string;
    description: string;
    imageUrl?: ImageSourcePropType | undefined;
    rating: number;
}