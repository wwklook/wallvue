import { requests } from './index'

export function getWallCategory() {
  return requests({
    url: '/get_wall_category',
  })
}

export function getWallPage(wall) {
  return requests({
    url: '/get_wall_page',
    params: {
      wall
    }
  })
}

export function getWallContext(wall) {
  return requests({
    url: '/get_wall_context',
    params: {
      wall
    }
  })
}

export function getWallPic(href) {
  return requests({
    url: '/get_wall_pic',
    params: {
      href
    }
  })
}

export function getWallImg1400(href) {
  return requests({
    url: '/get_wall_img1400',
    params: {
      href
    }
  })
}
