import { SVGImage } from '@/constent/Theme'
import { reactive } from 'vue'

interface sumMenuDownType {
  child?: string
  to?: string
}
interface subMenuType {
  menu?: string
  to?: string
  className?: string
  subMenuDownItems?: sumMenuDownType[]
}
  
interface menuType {
  icons?: string
  title?: string
  className?: string
  to?: string
  subMenuItems?: subMenuType[]
}

const MenuItems = reactive<menuType[]>([
  { icons: SVGImage.iconSvg2, title: 'Employees', to: '/employee' },
  {
    icons: SVGImage.Security,
    title: 'IAM',
    className: 'sub-menu',
    subMenuItems: [
      { menu: 'Role', to: '/task' },
      { menu: 'Permission', to: '/task-summary' }
    ]
  },
])

export default MenuItems
