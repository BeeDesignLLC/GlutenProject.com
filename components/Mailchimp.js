// @flow
import * as React from 'react'
import {themeGet} from 'styled-system'
import Box from './Box'
import Heading from './Heading'
import Text from './Text'
import SmallText from './SmallText'
import Input from './Input'
import Button from './Button'

const Wrapper = Box.extend`
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid ${themeGet('colors.green')};
  border-radius: ${themeGet('space.2')};
  padding: ${themeGet('space.3')};
  max-width: 35rem;
`

const Mailchimp = (props: any) => (
  <Wrapper {...props}>
    <Heading mb={1}>Be The First To Know </Heading>
    <Text textAlign={['center', 'left']} mb={3}>
      About new features and product listings
    </Text>

    <form
      action="https://glutenproject.us16.list-manage.com/subscribe/post?u=e05942325d03e53601e264cc3&amp;id=43d42a6f7c"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
      onSubmit={() => {
        if (window.location.host === 'glutenproject.com') {
          window.gtag && window.gtag('event', 'sign_up')
        }
      }}
    >
      <div>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          justifyContent={['center', 'flex-start']}
        >
          <label htmlFor="mce-EMAIL">
            <span className="screen-reader-text">Email Address</span>
          </label>
          <Input
            type="email"
            name="EMAIL"
            placeholder="brandon@glutenproject.com"
            id="mce-EMAIL"
            flex={1}
            mb={2}
          />
          <Button type="submit" name="subscribe" ml={2} mb={2}>
            Join the Club
          </Button>
        </Box>
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
          <input
            type="text"
            name="b_e05942325d03e53601e264cc3_43d42a6f7c"
            tabIndex="-1"
            value=""
          />
        </div>
      </div>
    </form>
    <SmallText textAlign={['center', 'left']}>
      Your email is top secret and NO ONE else will ever get it.
    </SmallText>
  </Wrapper>
)

export default Mailchimp
