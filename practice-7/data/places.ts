import { Place } from "../types/types";

export const places: Place[] = [
    {
        id: 1,
        name: "Дворец Кёнбоккун",
        category: "Достопримечательности",
        description: "Главный дворец эпохи Чосон, расположенный в центре Сеула.",
        imageUrl: require('../assets/images/places/gyeongbokgung_palace.jpg'),
        rating: 4.8
    },
    {
        id: 2,
        name: "Парк Намсан",
        category: "Парки",
        description: "Популярный парк вокруг горы Намсан, с которого открывается вид на Сеул.",
        imageUrl: require('../assets/images/places/namsan_park.jpg'),
        rating: 4.7
    },
    {
        id: 3,
        name: "Башня N Сеул",
        category: "Достопримечательности",
        description: "Знаменитая телебашня на горе Намсан, популярное место для туристов.",
        imageUrl: require('../assets/images/places/n_seoul_tower.jpg'),
        rating: 4.9
    },
    {
        id: 4,
        name: "Рынок Мёндон",
        category: "Рестораны",
        description: "Известный район для шопинга и уличной еды в Сеуле.",
        imageUrl: require('../assets/images/places/myeongdong_market.jpg'),
        rating: 4.6
    },
    {
        id: 5,
        name: "Река Ханган",
        category: "Парки",
        description: "Река, протекающая через Сеул, с парками и зонами отдыха вдоль берегов.",
        imageUrl: require('../assets/images/places/han_river.jpg'),
        rating: 4.8
    },
    {
        id: 6,
        name: "Храм Чогеса",
        category: "Достопримечательности",
        description: "Буддийский храм в центре Сеула, известный своей архитектурой и культурными мероприятиями.",
        imageUrl: require('../assets/images/places/jogyesa_temple.jpg'),
        rating: 4.7
    },
    {
        id: 7,
        name: "Парк Ханган",
        category: "Парки",
        description: "Огромный парк вдоль реки Ханган с зонами для пикников, велодорожками и спортивными площадками.",
        imageUrl: require('../assets/images/places/hangang_park.jpg'),
        rating: 4.8
    },
    {
        id: 8,
        name: "Инсадон",
        category: "Достопримечательности",
        description: "Район, известный своими традиционными магазинами, галереями и ресторанами.",
        imageUrl: require('../assets/images/places/insadong.jpg'),
        rating: 4.6
    },
    {
        id: 9,
        name: "Лотте Ворлд",
        category: "Достопримечательности",
        description: "Один из крупнейших крытых парков развлечений в мире, расположенный в Сеуле.",
        imageUrl: require('../assets/images/places/lotte_world.jpg'),
        rating: 4.9
    },
    {
        id: 10,
        name: "Донгдемун Дизайн Плаза",
        category: "Достопримечательности",
        description: "Современный культурный центр с уникальной архитектурой, выставками и магазинами.",
        imageUrl: require('../assets/images/places/ddp.jpg'),
        rating: 4.7
    }
];

export const categories = [
    "Достопримечательности",
    "Парки",
    "Рестораны"
];
