
import React from 'react'
import { Discord, DiscordOutline, Slack, SlackOutline, Telegram, TelegramOutline } from '../../../assets/svgs'
import { CommunityCards } from '../../../ui_elements'
import { CommunityChannels, CommunityContainer, Posts } from './Community.styles'

const Community = () => {
    return (
        <CommunityContainer>
            <CommunityChannels>
                <CommunityCards
                    platform={"Discord"}
                    iconOutline={<DiscordOutline />}
                    icon={<Discord />}
                />
                 <CommunityCards
                    platform={"Slack"}
                    iconOutline={<SlackOutline />}
                    icon={<Slack />}
                />
                <CommunityCards
                    platform={"Telegram"}
                    iconOutline={<TelegramOutline/>}
                    icon={<Telegram />}
                    iconBackgroundColor={" rgba(88, 101, 242, 0.13)"}
                />
            </CommunityChannels>
        
            <Posts>

            </Posts>
        </CommunityContainer>
    )
}

export default Community