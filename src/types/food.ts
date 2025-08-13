export type FoodCategory = 'Korean' | 'Chinese' | 'Japanese' | 'Western' | 'Street' | 'Cafe' | 'Salad';

export type FoodSubcategory =
  | 'Rice'
  | 'Noodle'
  | 'Soup'
  | 'Stew'
  | 'Grill'
  | 'Fried'
  | 'Pasta'
  | 'Pizza'
  | 'Sandwich'
  | 'Dessert'
  | 'Coffee'
  | 'SaladBowl';

export type FoodTag = 'spicy' | 'vegan' | 'noPork' | 'seafood' | 'hot' | 'cold' | 'quick' | 'light' | 'heavy' | 'sweet';

export type Budget = 'low' | 'mid' | 'high';

export type Food = {
  id: string;
  name: string;
  category: FoodCategory;
  sub?: FoodSubcategory;
  tags?: FoodTag[];
  budget?: Budget;
  weight?: number;
};

export const CATEGORY_LABELS: Record<FoodCategory, string> = {
  Korean: '한식',
  Chinese: '중식',
  Japanese: '일식',
  Western: '양식',
  Street: '분식',
  Cafe: '카페',
  Salad: '샐러드',
};

export const SUBS_BY_CATEGORY: Record<FoodCategory, FoodSubcategory[]> = {
  Korean: ['Rice', 'Soup', 'Stew', 'Grill', 'Noodle'],
  Chinese: ['Noodle', 'Rice', 'Fried', 'Soup'],
  Japanese: ['Noodle', 'Rice', 'Soup'],
  Western: ['Pasta', 'Pizza', 'Sandwich'],
  Street: ['Noodle', 'Fried', 'Rice'],
  Cafe: ['Dessert', 'Coffee', 'Sandwich'],
  Salad: ['SaladBowl'],
};

export const SUB_LABELS: Record<FoodSubcategory, string> = {
  Rice: '밥류',
  Noodle: '면류',
  Soup: '국/탕',
  Stew: '찌개',
  Grill: '구이',
  Fried: '튀김',
  Pasta: '파스타',
  Pizza: '피자',
  Sandwich: '샌드위치',
  Dessert: '디저트',
  Coffee: '커피',
  SaladBowl: '샐러드볼',
};
export const TAG_LABELS: Record<FoodTag, string> = {
  spicy: '매운맛',
  vegan: '비건',
  noPork: '돼지고기 없음',
  seafood: '해산물',
  hot: '뜨거움',
  cold: '차가움',
  quick: '빠름',
  light: '가벼움',
  heavy: '푸짐함',
  sweet: '단맛',
};
