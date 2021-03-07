import React from "react"
import { IconGithub, IconPOA, IconTelegram, IconTwitter } from "./social-icons"

export const SocialIcons = () => {
  const socialItems = [
    {
      icon: <IconPOA />,
      link: "https://app.neumekca.city",
    },
    {
      icon: <IconTwitter />,
      link: "https://twitter.com/Neumekca",
    },
    {
      icon: <IconTelegram />,
      link: "https://t.me/neumekcagroup",
    }
  ]

  return (
    <div className="social-icons">
      {socialItems.map((item, index) => {
        return (
          <a key={index} href={item.link} target="_blank" className="social-icons-item">
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}
