// src/data/foods.ts
import type { Food } from '@/types/food';

export const FOODS: Food[] = [
  // Korean (18)
  { id: 'bibimbap', name: '비빔밥', category: 'Korean', sub: 'Rice', tags: ['light'], budget: 'mid' },
  { id: 'kimchiStew', name: '김치찌개', category: 'Korean', sub: 'Stew', tags: ['spicy', 'hot'], budget: 'low' },
  { id: 'bulgogi', name: '불고기', category: 'Korean', sub: 'Grill', tags: [], budget: 'mid' },
  { id: 'galbitang', name: '갈비탕', category: 'Korean', sub: 'Soup', tags: ['hot'], budget: 'high' },
  { id: 'bossam', name: '보쌈', category: 'Korean', sub: 'Grill', tags: ['heavy'], budget: 'high' },
  { id: 'doenjangStew', name: '된장찌개', category: 'Korean', sub: 'Stew', tags: ['hot'], budget: 'low' },
  { id: 'sundubuStew', name: '순두부찌개', category: 'Korean', sub: 'Stew', tags: ['spicy', 'hot'], budget: 'mid' },
  { id: 'naengmyeon', name: '물냉면', category: 'Korean', sub: 'Noodle', tags: ['cold', 'light'], budget: 'mid' },
  {
    id: 'bibimNaengmyeon',
    name: '비빔냉면',
    category: 'Korean',
    sub: 'Noodle',
    tags: ['spicy', 'cold'],
    budget: 'mid',
  },
  { id: 'samgyetang', name: '삼계탕', category: 'Korean', sub: 'Soup', tags: ['hot', 'noPork'], budget: 'high' },
  { id: 'seolleongtang', name: '설렁탕', category: 'Korean', sub: 'Soup', tags: ['hot'], budget: 'mid' },
  { id: 'kalguksu', name: '칼국수', category: 'Korean', sub: 'Noodle', tags: ['hot'], budget: 'mid' },
  {
    id: 'kimchiFriedRice',
    name: '김치볶음밥',
    category: 'Korean',
    sub: 'Rice',
    tags: ['quick', 'spicy'],
    budget: 'low',
  },
  { id: 'jeyukBap', name: '제육덮밥', category: 'Korean', sub: 'Rice', tags: ['spicy', 'heavy'], budget: 'low' },
  { id: 'kongguksu', name: '콩국수', category: 'Korean', sub: 'Noodle', tags: ['cold', 'light'], budget: 'mid' },
  { id: 'dakgalbi', name: '닭갈비', category: 'Korean', sub: 'Grill', tags: ['spicy'], budget: 'mid' },
  { id: 'soondaeGuk', name: '순대국', category: 'Korean', sub: 'Soup', tags: ['hot', 'heavy'], budget: 'low' },
  { id: 'gukbap', name: '국밥', category: 'Korean', sub: 'Soup', tags: ['hot'], budget: 'low' },

  // Chinese (9)
  { id: 'jjajang', name: '짜장면', category: 'Chinese', sub: 'Noodle', tags: [], budget: 'low' },
  { id: 'jjamppong', name: '짬뽕', category: 'Chinese', sub: 'Soup', tags: ['spicy', 'seafood', 'hot'], budget: 'mid' },
  { id: 'friedRice', name: '볶음밥', category: 'Chinese', sub: 'Rice', tags: ['quick'], budget: 'low' },
  { id: 'yangjangpi', name: '양장피', category: 'Chinese', sub: 'Noodle', tags: ['seafood'], budget: 'high' },
  { id: 'tangsuyuk', name: '탕수육', category: 'Chinese', sub: 'Fried', tags: ['sweet'], budget: 'mid' },
  { id: 'maPoTofu', name: '마파두부', category: 'Chinese', sub: 'Rice', tags: ['spicy'], budget: 'mid' },
  { id: 'dandanNoodles', name: '탄탄면', category: 'Chinese', sub: 'Noodle', tags: ['spicy', 'hot'], budget: 'mid' },
  {
    id: 'sweetSourShrimp',
    name: '깐쇼새우',
    category: 'Chinese',
    sub: 'Fried',
    tags: ['seafood', 'spicy'],
    budget: 'high',
  },
  { id: 'malaXiangGuo', name: '마라샹궈', category: 'Chinese', sub: 'Fried', tags: ['spicy'], budget: 'mid' },

  // Japanese (8)
  { id: 'ramen', name: '라멘', category: 'Japanese', sub: 'Noodle', tags: ['hot'], budget: 'mid' },
  { id: 'sushi', name: '스시 세트', category: 'Japanese', sub: 'Rice', tags: ['seafood', 'cold'], budget: 'high' },
  { id: 'udon', name: '우동', category: 'Japanese', sub: 'Noodle', tags: ['hot'], budget: 'mid' },
  { id: 'donkatsu', name: '돈카츠', category: 'Japanese', sub: 'Fried', tags: ['heavy'], budget: 'mid' },
  { id: 'curryRice', name: '일본식 카레라이스', category: 'Japanese', sub: 'Rice', tags: [], budget: 'mid' },
  { id: 'katsudon', name: '가츠동', category: 'Japanese', sub: 'Rice', tags: ['heavy'], budget: 'mid' },
  { id: 'oyakodon', name: '오야코동', category: 'Japanese', sub: 'Rice', tags: [], budget: 'mid' },
  { id: 'soba', name: '메밀소바', category: 'Japanese', sub: 'Noodle', tags: ['cold', 'light'], budget: 'mid' },

  // Western (7)
  { id: 'carbonara', name: '까르보나라', category: 'Western', sub: 'Pasta', tags: ['heavy'], budget: 'mid' },
  { id: 'aglioOlio', name: '알리오 올리오', category: 'Western', sub: 'Pasta', tags: ['light'], budget: 'mid' },
  { id: 'margherita', name: '마르게리타', category: 'Western', sub: 'Pizza', tags: ['light'], budget: 'mid' },
  { id: 'clubSandwich', name: '클럽 샌드위치', category: 'Western', sub: 'Sandwich', tags: ['quick'], budget: 'mid' },
  { id: 'steakRiceBowl', name: '스테이크 덮밥', category: 'Western', sub: 'Rice', tags: ['heavy'], budget: 'high' },
  { id: 'omeletteRice', name: '오므라이스', category: 'Western', sub: 'Rice', tags: ['light'], budget: 'mid' },
  { id: 'chickenWrap', name: '치킨 랩', category: 'Western', sub: 'Sandwich', tags: ['quick', 'light'], budget: 'mid' },

  // Street / Bunsik (5)
  { id: 'tteokbokki', name: '떡볶이', category: 'Street', sub: 'Noodle', tags: ['spicy', 'hot'], budget: 'low' },
  { id: 'gimbap', name: '김밥', category: 'Street', sub: 'Rice', tags: ['quick', 'light'], budget: 'low' },
  { id: 'mandu', name: '만두', category: 'Street', sub: 'Fried', tags: [], budget: 'low' },
  { id: 'fishcakeSoup', name: '어묵탕', category: 'Street', sub: 'Soup', tags: ['hot', 'light'], budget: 'low' },
  {
    id: 'dakgangjeong',
    name: '닭강정',
    category: 'Street',
    sub: 'Fried',
    tags: ['sweet', 'spicy', 'heavy'],
    budget: 'mid',
  },

  // Salad (3)
  { id: 'chickenSalad', name: '포케', category: 'Salad', sub: 'SaladBowl', tags: ['light'], budget: 'mid' },
  { id: 'caesarSalad', name: '치킨랩', category: 'Salad', sub: 'SaladBowl', tags: ['light'], budget: 'mid' },
  {
    id: 'salmonSalad',
    name: '연어 샐러드',
    category: 'Salad',
    sub: 'SaladBowl',
    tags: ['light', 'seafood'],
    budget: 'mid',
  },
];
