import type { ModelItem } from '../types';
import { DEEPSEEK } from './provider';
import { DEEPSEEK_THINKING } from '../defines';

const DS_BASE = {
  family: 'deepseek',
  provider: DEEPSEEK,
  thinking: true,
  imageInput: false,
  maxTools: 128,
  thinkingConfig: DEEPSEEK_THINKING,
};

export const DEEPSEEK_V4_PRO: ModelItem = {
  ...DS_BASE,
  id: 'deepseek-v4-pro',
  label: 'DeepSeek V4 Pro',
  version: '4',
  maxInputTokens: 616_000,
  maxOutputTokens: 384_000,
  detailKey: 'model.deepseek-v4-pro.detail',
  pricing: {
    CNY: {
      default: { cacheInput: 0.15, input: 4.5, output: 13.5 },
      longContext: { cacheInput: 0.3, input: 9, output: 27 },
    },
    USD: {
      default: { cacheInput: 0.022, input: 0.66, output: 1.98 },
      longContext: { cacheInput: 0.044, input: 1.32, output: 3.96 },
    },
  },
  priceCategory: 'medium',
};

export const DEEPSEEK_V4_1_FLASH: ModelItem = {
  ...DS_BASE,
  id: 'deepseek-flash',
  label: 'DeepSeek V4.1 Flash',
  version: '4',
  imageInput: true,
  maxInputTokens: 616_000,
  maxOutputTokens: 384_000,
  detailKey: 'model.deepseek-flash.detail',
  pricing: {
    CNY: {
      default: { cacheInput: 0.02, input: 1, output: 4 },
      longContext: { cacheInput: 0.04, input: 2, output: 8 },
    },
    USD: {
      default: { cacheInput: 0.003, input: 0.15, output: 0.6 },
      longContext: { cacheInput: 0.006, input: 0.3, output: 1.2 },
    },
  },
  priceCategory: 'low',
};

export const DEEPSEEK_V4_FLASH: ModelItem = {
  ...DEEPSEEK_V4_1_FLASH,
  label: 'DeepSeek V4 Flash',
};

export const DEEPSEEK_V4_FLASH_VISION_EXP: ModelItem = {
  ...DEEPSEEK_V4_FLASH,
  label: 'DeepSeek V4 Flash Vision Exp',
};

export const DEEPSEEK_V4_PRO_0813: ModelItem = {
  ...DEEPSEEK_V4_PRO,
  id: 'deepseek-v4-pro-0813',
  label: 'DeepSeek V4 Pro 0813',
};

export const DEEPSEEK_V4_FLASH_0731: ModelItem = {
  ...DEEPSEEK_V4_FLASH,
  id: 'deepseek-v4-flash-0731',
  label: 'DeepSeek V4 Flash 0731',
};

export const DS_MODELS: readonly ModelItem[] = [DEEPSEEK_V4_PRO, DEEPSEEK_V4_1_FLASH];
