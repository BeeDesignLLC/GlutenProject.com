// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'
import Image from '../components/Image'
import A from '../components/A'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App
        title="Certified Gluten-Free Meal Delivery Services | The Gluten Project"
        description="Order without any fear of being glutened! Here you'll find every certified-gluten free meal delivery service."
      >
        <Box area="main">
          <Heading is="h1" fontSize={5} fontStyle="italic" color="black" mt={3}>
            Certified Gluten-Free Meal Delivery Services
          </Heading>

          <LargeText>
            Until late 2017, only gluten-eaters could order an easy meal from anywhere
            online. Thankfully meal delivery services are starting to cater to those of us
            with severe gluten intolerances! All delivery services listed have been
            certified by Gluten Intolerance Group’s GFFS program. We’ll update the list as
            more obtain certification.
          </LargeText>

          <Heading is="h2" fontSize={4} mt={5}>
            Green Chef
          </Heading>
          <A
            href="http://www.anrdoezrs.net/click-8542692-13132982"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="https://tgp.imgix.net/http%3A%2F%2Fwww.ftjcfx.com%2Fimage-8542692-13132982?s=a56a8b703d74c1f5a3bd44902ac0f7e9"
              width="728"
              height="90"
              alt="Green Chef promo"
            />
          </A>
          <LargeText mt={3}>
            Green Chef is a meal kit subscription service. Keywords being “kit” and
            “subscription”. Each kit comes with pre-measured ingredients and sauces and an
            easy-to-follow recipe for preparing a restaurant-quality meal. No meal
            planning, recipe hunting, or grocery shopping required.
          </LargeText>

          <LargeText mt={3}>
            The subscription is easy to manage (and cancel) and can be scheduled for
            weekly, bi-weekly, or monthly deliveries. And of course you can skip any
            shipment without charge.
          </LargeText>

          <LargeText mt={3}>
            They currently have three certified gluten-free meal plans:
          </LargeText>
          <LargeText is="ol" mt={2}>
            <li>
              <A
                href="http://www.anrdoezrs.net/click-8542692-13200134"
                target="_blank"
                rel="noopener"
              >
                Gluten-free
              </A>
            </li>
            <li>
              <A
                href="http://www.anrdoezrs.net/click-8542692-13200142"
                target="_blank"
                rel="noopener"
              >
                Paleo
              </A>
            </li>
            <li>
              <A
                href="http://www.anrdoezrs.net/click-8542692-13200156"
                target="_blank"
                rel="noopener"
              >
                Keto
              </A>
            </li>
          </LargeText>

          <LargeText mt={4}>
            Each delivery contains multiple dinners. Each dinner’s recipe is randomly
            chosen. Unfortunately you can’t opt out of certain recipes or ingredients
            (like eggs). But you can customize your protein.
          </LargeText>
          <LargeText mt={3}>
            The 2-person plan contains 3 dinners (6 servings) per box. The family plan
            contains 2 dinners (8 servings) per box.
          </LargeText>

          <LargeText mt={3}>Their meals feature:</LargeText>
          <LargeText is="ul" mt={2}>
            <li>High-quality, natural ingredients</li>
            <li>Organic ingredients where possible</li>
            <li>Ingredients from local sources</li>
            <li>Sustainable packaging</li>
          </LargeText>

          <LargeText mt={4}>
            If this sounds perfect for you, try them out and let us know how you like it!
          </LargeText>

          <Heading is="h3" mt={4}>
            Green Chef’s Allergen Statement
          </Heading>
          <LargeText>
            “Our ingredients are processed and packaged in the same facility, and
            cross-contact with major food allergens may occur. While we follow
            industry-leading best practices in safe food handling, trace amounts of
            allergens may exist in your meal. If you have a severe allergy, please use
            your discretion.”
          </LargeText>
        </Box>
      </App>
    )
  }
}
