import React from 'react'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDribbble,
  IoIosMail,
} from 'react-icons/io'
import SocialItem from './SocialItem'

const SOCIAL_ITEMS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/stivncastillo_',
    icon: <IoLogoTwitter size={19} />,
  },
  {
    name: 'Github',
    url: 'https://github.com/stivncastillo',
    icon: <IoLogoGithub size={19} />,
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/stivncastillo/',
    icon: <IoLogoLinkedin size={19} />,
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/stivncastillo',
    icon: <IoLogoDribbble size={19} />,
  },
  {
    name: 'E-mail',
    url: 'mailto:stivencastillo.90@gmail.com',
    icon: <IoIosMail size={19} />,
  },
]

const SocialList = () => {
  return (
    <section className="flex flex-col flex-1 space-y-1 mb-8">
      <span className="text-slate-400 dark:text-slate-500 text-xs">
        Get in touch / Follow
      </span>
      <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
        {SOCIAL_ITEMS.map(({ name, url, icon }) => (
          <SocialItem key={name} name={name} href={url}>
            {icon}
          </SocialItem>
        ))}
      </ul>
    </section>
  )
}

export default SocialList
