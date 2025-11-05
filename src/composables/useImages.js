import { getImageUrl } from '@/utils/images'

/**
 * Composable to handle image paths correctly in both dev and production
 */
export function useImages() {
  const getImage = (imagePath) => {
    return getImageUrl(imagePath)
  }
  
  return {
    getImage
  }
}

