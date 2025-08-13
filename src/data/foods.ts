// src/data/foods.ts
import type { Food } from '@/types/food';

export const FOODS: Food[] = [
  // Korean
  { id: 'bibimbap', name: '비빔밥', category: 'Korean', sub: 'Rice', tags: ['light'], budget: 'mid' },
  { id: 'kimchiStew', name: '김치찌개', category: 'Korean', sub: 'Stew', tags: ['spicy', 'hot'], budget: 'low' },
  { id: 'bulgogi', name: '불고기', category: 'Korean', sub: 'Grill', tags: ['noPork'], budget: 'mid' },
  { id: 'galbitang', name: '갈비탕', category: 'Korean', sub: 'Soup', tags: ['hot'], budget: 'high' },
  { id: 'bossam', name: '보쌈', category: 'Korean', sub: 'Grill', tags: ['heavy'], budget: 'high' },

  // Chinese
  { id: 'jjajang', name: '짜장면', category: 'Chinese', sub: 'Noodle', budget: 'low' },
  { id: 'jjamppong', name: '짬뽕', category: 'Chinese', sub: 'Soup', tags: ['spicy', 'seafood', 'hot'], budget: 'mid' },
  { id: 'friedRice', name: '볶음밥', category: 'Chinese', sub: 'Rice', tags: ['quick'], budget: 'low' },
  { id: 'yangjangpi', name: '양장피', category: 'Chinese', sub: 'Noodle', tags: ['seafood'], budget: 'high' },

  // Japanese
  { id: 'ramen', name: '라멘', category: 'Japanese', sub: 'Noodle', tags: ['hot'], budget: 'mid' },
  { id: 'sushi', name: '스시', category: 'Japanese', sub: 'Rice', tags: ['seafood', 'cold'], budget: 'high' },
  { id: 'udon', name: '우동', category: 'Japanese', sub: 'Noodle', tags: ['hot'], budget: 'mid' },

  // Western
  { id: 'carbonara', name: '까르보나라', category: 'Western', sub: 'Pasta', tags: ['heavy'], budget: 'mid' },
  { id: 'margherita', name: '마르게리타', category: 'Western', sub: 'Pizza', tags: ['light'], budget: 'mid' },
  { id: 'clubSandwich', name: '클럽 샌드위치', category: 'Western', sub: 'Sandwich', tags: ['quick'], budget: 'mid' },
  { id: 'omeletteRice', name: '오므라이스', category: 'Western', sub: 'Rice', tags: ['light'], budget: 'mid' },

  // Street
  { id: 'tteokbokki', name: '떡볶이', category: 'Street', sub: 'Noodle', tags: ['spicy', 'hot'], budget: 'low' },
  { id: 'hotteok', name: '호떡', category: 'Street', sub: 'Rice', tags: ['sweet', 'hot'], budget: 'low' },
  { id: 'corndog', name: '핫도그', category: 'Street', sub: 'Fried', tags: ['heavy'], budget: 'low' },

  // Cafe
  { id: 'americano', name: '아메리카노', category: 'Cafe', sub: 'Coffee', tags: ['light', 'quick'], budget: 'low' },
  { id: 'latte', name: '라떼', category: 'Cafe', sub: 'Coffee', tags: ['sweet'], budget: 'mid' },
  { id: 'cheesecake', name: '치즈케이크', category: 'Cafe', sub: 'Dessert', tags: ['sweet'], budget: 'mid' },
  { id: 'macaron', name: '마카롱', category: 'Cafe', sub: 'Dessert', tags: ['sweet'], budget: 'mid' },
  { id: 'croissant', name: '크루아상', category: 'Cafe', sub: 'Dessert', tags: ['sweet'], budget: 'mid' },
  { id: 'bingsu', name: '팥빙수', category: 'Cafe', sub: 'Dessert', tags: ['sweet', 'cold'], budget: 'mid' },
  { id: 'churros', name: '츄러스', category: 'Cafe', sub: 'Dessert', tags: ['sweet', 'quick'], budget: 'mid' },

  // Salad
  {
    id: 'salmonSalad',
    name: '연어 샐러드',
    category: 'Salad',
    sub: 'SaladBowl',
    tags: ['light', 'seafood'],
    budget: 'mid',
  },
  { id: 'chickenSalad', name: '치킨 샐러드', category: 'Salad', sub: 'SaladBowl', tags: ['light'], budget: 'mid' },
  { id: 'caesarSalad', name: '시저 샐러드', category: 'Salad', sub: 'SaladBowl', tags: ['light'], budget: 'mid' },
];
