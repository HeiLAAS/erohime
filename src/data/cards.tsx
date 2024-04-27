import styles from './index.module.scss'
import { IData } from './type'
import { CorrectIcon, RainbowIcon, MultiLangIcon } from '@assets/index'
import { OPQ_DOC_SITE } from './constants'

export const CARDS_CONFIG: Pick<IData, 'cards'> = {
  cards: [
    {
      icon: <CorrectIcon className={styles.correct_icon} />,
      title: 'Easy to use',
      desc: '不论您是小白还是经验丰富的高手，通过简单的学习，即可轻松搭建自己的OPQBot',
      link: OPQ_DOC_SITE,
    },
    {
      icon: <MultiLangIcon />,
      title: 'Develop with power',
      desc: '借助社区提供的多语言 SDK 支持，轻松开发独一无二的功能',
      link: 'https://docs.opqbot.com',
    },
    {
      icon: <RainbowIcon className={styles.correct_icon} />,
      title: 'Enrich open source',
      desc: '低成本，高价值：轻松享受开源社区提供的即开即用插件和功能',
      link: 'https://docs.opqbot.com',
    },
  ],
}
