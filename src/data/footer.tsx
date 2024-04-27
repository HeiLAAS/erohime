import {
  PythonIcon,
  GolangIcon,
  NodejsIcon,
  CsharpIcon,
  GitterIcon,
  TelegramIcon,
  LuaIcon,
} from '@assets/index'
import styles from './index.module.scss'
import {
  BarsOutlined,
  GithubFilled,
  CodeSandboxOutlined,
  DashboardOutlined,
  CloudSyncOutlined,
  TagOutlined,
  HeartOutlined,
  CommentOutlined,
  BulbOutlined,
  UsergroupAddOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons'
import { Button, Space } from 'antd'
import { IData } from './type'
import { OPQ_DOC_SITE, OPQ_REPO, OPQ_OSC_LINK, OPQ_WIKI } from './constants'
import { color } from '../constants/color'

const getShareProps = (target: string) => ({
  'data-social': target,
  'data-url': `https://opqbot.com/`,
  'data-hashtags': `opqbot, opq, bot`,
  'data-title': `OPQBot - 跨平台机器人框架`,
})

const currentYear = new Date().getFullYear()

export const FOOTER_CONFIG: Pick<IData, 'footer'> = {
  footer: {
    license: (
      <>
        {`MIT Licensed | Copyright © ${currentYear}`}
        <br />
        <Button
          type="link"
          href={OPQ_OSC_LINK}
          className={styles.osc_link}
          target="_blank"
        >
          OPQ Open Source Community
        </Button>
      </>
    ),
    links: [
      {
        title: 'OPQBot',
        child: [
          {
            name: '文档站',
            icon: <BarsOutlined />,
            href: OPQ_DOC_SITE,
          },
          {
            name: '仓库地址',
            icon: <GithubFilled />,
            href: OPQ_REPO,
          },
          {
            name: '开发社区',
            icon: <CommentOutlined />,
            href: OPQ_OSC_LINK,
          },
          {
            name: 'Wiki',
            icon: <BulbOutlined />,
            href: OPQ_WIKI,
          },
          {
            name: 'Telegram',
            icon: <TelegramIcon className={styles.gitter_icon} />,
            href: 'https://t.me/IOTQQ',
          },
          {
            name: '投喂打赏',
            icon: <HeartOutlined />,
            href: 'https://github.com/opq-osc/OPQ#readme',
          },
          {
            name: '加入我们',
            icon: <UsergroupAddOutlined />,
            href: 'https://docs.opqbot.com/about/join.html',
          },
        ],
      },
      {
        title: '功能开发',
        child: [
          // TODO: add SDK Summary
          // {
          //   name: 'SDK Summary',
          //   icon: <CodeSandboxOutlined />,
          //   href: 'https://docs.opqbot.com/project/wip.html',
          // },
          {
            name: 'Python SDK',
            icon: <PythonIcon className={styles.sdk_color_icon} />,
            href: [
              {
                name: 'botoy',
                link: 'https://github.com/opq-osc/botoy',
                desc: 'OPQ/IOTQQ/IOTBot的一个Python开发助手🐌',
              },
            ],
          },
          {
            name: 'Golang SDK',
            icon: <GolangIcon className={styles.sdk_color_icon} />,
            href: [
              {
                name: 'OPQBot',
                link: 'https://github.com/opq-osc/OPQBot',
                desc: 'OPQBot Golang SDK',
              },
            ],
          },
          {
            name: 'Nodejs SDK',
            icon: <NodejsIcon className={styles.sdk_color_icon} />,
            href: [
              {
                name: 'mahiro',
                link: 'https://github.com/opq-osc/mahiro',
                desc: (
                  <Space direction="vertical">
                    <span>
                      Mahiro is a JavaScript SDK for OPQBot that provides
                      message management,{' '}
                    </span>
                    <span>
                      sending and receiving, gateway interception, rate
                      limiting, filtering, and other functionalities
                    </span>
                  </Space>
                ),
              },
            ],
          },
          {
            name: 'C# SDK',
            icon: <CsharpIcon className={styles.sdk_color_icon} />,
            href: [
              {
                name: 'YukinoshitaBot.OPQ',
                link: 'https://github.com/opq-osc/YukinoShitaBot.OPQ-NT',
                desc: '一个C#类MVC架构的QQ机器人开发框架，基于OPQ-NT',
              },
            ],
          },
          // {
          //   name: 'Lua SDK',
          //   icon: <LuaIcon className={styles.sdk_color_icon} />,
          //   href: [
          //     {
          //       name: 'lua-lib',
          //       link: 'https://github.com/opq-osc/lua-lib',
          //       desc: '进一步封装 OPQ 的 lua api，调用更统一，简化开发，去除插件冗余代码, 免受 OPQ wiki 的困扰',
          //     },
          //   ],
          // },
        ],
      },
      // {
      //   title: '实用工具',
      //   child: [
      //     {
      //       name: 'panel',
      //       icon: <DashboardOutlined />,
      //       href: 'https://github.com/opq-osc/panel',
      //       desc: 'opqbot面板',
      //     },
      //     {
      //       name: 'MeowIOTConsole',
      //       icon: <CloudSyncOutlined />,
      //       href: 'https://github.com/opq-osc/MeowIOTConsole',
      //       desc: 'an EOC IOT Update Program :: Easy(ily) OpenSource CrossPlatfrom',
      //     },
      //   ],
      // },
      {
        title: '相关站点',
        child: [
          {
            name: 'OPQ Helper',
            href: 'https://docs.opqbot.com',
            icon: <BarsOutlined />,
          },
          {
            name: 'OPQBot Wiki',
            href: OPQ_WIKI,
            icon: <TagOutlined />,
          },
        ],
      },
      {
        title: '分享站点',
        child: [
          {
            name: 'Twitter',
            href: '',
            icon: <TwitterOutlined style={{ color: color.twitterBlue }} />,
            additionalProps: getShareProps('twitter'),
            preventDefault: true,
          },
          {
            name: 'Facebook',
            href: '',
            icon: <FacebookOutlined style={{ color: color.facebook }} />,
            additionalProps: getShareProps('facebook'),
            preventDefault: true,
          },
          {
            name: 'Telegram',
            href: '',
            icon: (
              <TelegramIcon
                className={styles.gitter_icon}
                style={{ color: color.telegram }}
              />
            ),
            additionalProps: getShareProps('telegram'),
            preventDefault: true,
          },
        ],
      },
    ],
  },
}
