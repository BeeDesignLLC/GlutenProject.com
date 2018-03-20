// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'
import A from '../components/A'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="The Gluten Project Privacy Policy">
        <Box area="main">
          <Heading is="h1" fontSize={6} fontStyle="italic" color="black" mt={3}>
            Privacy
          </Heading>

          <LargeText mb={3} fontStyle="italic">
            Last updated: February 15, 2018.
          </LargeText>

          <Heading is="h3" fontSize={4}>
            The Gist
          </Heading>
          <LargeText>
            The Gluten Project, operated by Bee Design LLC, will collect certain
            non-personally identifiable information about you as you use our sites. We may
            use this data to better understand our users. We can also publish this data,
            but the data will be about a large group of users, not individuals. We may
            also collect certain personal information about you and your use of the
            Service (as defined herein) which may be published and used in the aggregate
            as set forth in this Privacy Policy.
          </LargeText>
          <LargeText>
            To provide you with better service, we may ask you to provide personal
            information, but you&#8217;ll always be able to opt out. If you give us
            personal information, we won&#8217;t do anything evil with it.
          </LargeText>
          <LargeText>
            We can also use cookies, but you can choose not to store these.
          </LargeText>
          <LargeText>
            That&#8217;s the basic idea, but you must read through the entire Privacy
            Policy below and agree with all the details before you use any of our sites.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Reuse
          </Heading>
          <LargeText>
            This document is based upon the{' '}
            <A href="https://baremetrics.com/privacy">Baremetrics Privacy Policy</A> and
            the <A href="https://automattic.com/privacy/">Automattic Privacy Policy</A>{' '}
            and is licensed under{' '}
            <A href="https://creativecommons.org/licenses/by-sa/2.5/">
              Creative Commons Attribution Share-Alike License 2.5
            </A>. Basically, this means you can use it verbatim or edited, but you must
            release new versions under the same license and you have to credit Automattic
            somewhere (like this!). Automattic and Baremetrics are not connected with and
            do nosponsor or endorse The Gluten Project or its use of the work.
          </LargeText>
          <LargeText>
            The Gluten Project makes available services including our web sites
            (https://glutenproject.com (the &#8220;Site&#8221;)), our blog, our API, and
            any other software, sites, and services offered by The Gluten Project in
            connection to any of those (taken together, the &#8220;Service&#8221;). It is
            The Gluten Project&#8217;s policy to respect your privacy regarding any
            information we may collect while operating our Site.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Questions
          </Heading>
          <LargeText>
            If you have question about this Privacy Policy, please contact us at
            hi@glutenproject.com
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Visitors
          </Heading>
          <LargeText>
            Like most website operators, The Gluten Project collects
            non-personally-identifying information of the sort that web browsers and
            servers typically make available, such as the browser type, language
            preference, referring site, and the date and time of each visitor request. The
            Gluten Project&#8217;s purpose in collecting non-personally identifying
            information is to better understand how The Gluten Project&#8217;s visitors
            use its website. From time to time, The Gluten Project may release
            non-personally-identifying information in the aggregate, e.g., by publishing a
            report on trends in the usage of its website.
          </LargeText>
          <LargeText>
            The Gluten Project also collects potentially personally-identifying
            information like Internet Protocol (IP) addresses. The Gluten Project does not
            use such information to identify its visitors, however, and does not disclose
            such information, other than under the same circumstances that it uses and
            discloses personally-identifying information, as described below. We may also
            collect and use IP addresses to block users who violated our Terms of Service.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Gathering of Personally-Identifying Information
          </Heading>
          <LargeText>
            Certain visitors to The Gluten Project&#8217;s websites choose to interact
            with The Gluten Project in ways that require The Gluten Project to gather
            personally-identifying information. The amount and type of information that
            The Gluten Project gathers depends on the nature of the interaction. The
            Gluten Project collects such information only insofar as is necessary or
            appropriate to fulfill the purpose of the visitor&#8217;s interaction with The
            Gluten Project. The Gluten Project does not disclose personally-identifying
            information other than as described below. And visitors can always refuse to
            supply personally-identifying information, with the caveat that it may prevent
            them from engaging in certain Service-related activities.
          </LargeText>
          <LargeText>
            Additionally, some interactions, such as posting a comment, may ask for
            optional personal information. For instance, when posting a comment, may
            provide a website that will be displayed along with a user&#8217;s name when
            the comment is displayed. Supplying such personal information is completely
            optional and is only displayed for the benefit and the convenience of the
            user.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Aggregated Statistics and Third Party Analytics Providers
          </Heading>
          <LargeText>
            The Gluten Project may collect statistics about the behavior of visitors to
            and users of the Service. For instance, The Gluten Project may monitor the
            most popular parts of the The Gluten Project Site. The Gluten Project may
            display this information in the aggregate publicly or provide it to others.
          </LargeText>
          <LargeText>
            In addition, The Gluten Project may, from time to time, collect certain
            personal information from you, your use of the Services, and/or the users of
            your website, such as your user churn rate, your financial data and revenue,
            your conversation rates and other metrics (your “Data”). The Gluten Project
            may publish and display your Data in the aggregate to the public through our
            Site or on our blog, e.g. by publishing a report on average churn rates on the
            Site. However, all Data is only used and published in the aggregate which
            means that any published Data will not identify you, your website, your
            company or your users, or link you to the published information in any way. If
            you wish to opt out of the publication of your Data, please contact us as
            hi@glutenproject.com.
          </LargeText>
          <LargeText>
            The Gluten Project may also use third party analytics providers and products,
            such as Amazon (collectively, “Third Party Providers”), to obtain, compile and
            analyze information (that may include personally-identifying information)
            about how users are using and interacting with The Gluten Project and/or the
            Services. Such information is compiled in the aggregate and anonymized (i.e.
            the aggregated data will not personally identify users in any way) and
            provided to Third Party Providers for analytics purposes only (e.g. obtaining
            statistics and other information about how users are using and interacting
            with The Gluten Project). These Third Party Providers may use a variety of
            established or new technologies or tools (including, without limitation,
            cookies, web beacons, HTTP cache, local shared objects and persistent
            identifiers) to recognize your computer or device and/or to collect or compile
            this information. You understand and acknowledge that The Gluten Project has
            no control over the technologies, tools or practices of the Third Party
            Providers providing analytics products and services to The Gluten Project.
          </LargeText>
          <LargeText>
            The Gluten Project does not disclose personally-identifying information other
            than as described below.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Protection of Certain Personally-Identifying Information
          </Heading>
          <LargeText>
            The Gluten Project discloses potentially personally-identifying and
            personally-identifying information only to those of its employees, contractors
            and affiliated organizations that (i) need to know that information in order
            to process it on The Gluten Project&#8217; behalf or to provide services
            available at The Gluten Project&#8217; Site websites, and (ii) that have
            agreed not to disclose it to others. Some of those employees, contractors and
            affiliated organizations may be located outside of your home country; by using
            the Service, you consent to the transfer of such information to them. The
            Gluten Project will not rent or sell potentially personally-identifying and
            personally-identifying information to anyone. Other than to its employees,
            contractors and affiliated organizations, as described above, The Gluten
            Project discloses potentially personally-identifying and
            personally-identifying information only when required to do so by law, or when
            The Gluten Project believes in good faith that disclosure is reasonably
            necessary to protect the property or rights of The Gluten Project, third
            parties or the public at large. If you are a registered user of the Service
            and have supplied your email address, The Gluten Project may occasionally send
            you an email to tell you about new features, solicit your feedback, or just
            keep you up to date with what&#8217;s going on with The Gluten Project and our
            products. We primarily use our website and blog to communicate this type of
            information, so we expect to keep this type of email to a minimum. If you send
            us a request (for example via a support email or via one of our feedback
            mechanisms), we reserve the right to publish it in order to help us clarify or
            respond to your request or to help us support other users. The Gluten Project
            takes all measures reasonably necessary to protect against the unauthorized
            access, use, alteration or destruction of potentially personally-identifying
            and personally-identifying information.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Cookies
          </Heading>
          <LargeText>
            A cookie is a string of information that a website stores on a visitor&#8217;s
            computer, and that the visitor&#8217;s browser provides to the Service each
            time the visitor returns. The Gluten Project uses cookies to help The Gluten
            Project identify and track visitors, their usage of The Gluten Project
            Service, and their Service access preferences. The Gluten Project visitors who
            do not wish to have cookies placed on their computers should set their
            browsers to refuse cookies before using The Gluten Project&#8217;s websites,
            with the drawback that certain features of The Gluten Project&#8217;s websites
            may not function properly without the aid of cookies.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Business Transfers
          </Heading>
          <LargeText>
            If The Gluten Project, or substantially all of its assets, were acquired, or
            in the unlikely event that Baremetrids goes out of business or enters
            bankruptcy, user information would be one of the assets that is transferred or
            acquired by a third party. You acknowledge that such transfers may occur, and
            that any acquirer of The Gluten Project may continue to use your personal
            information as set forth in this policy.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Data Storage
          </Heading>
          <LargeText>
            The Gluten Project uses third party vendors and hosting partners to provide
            the necessary hardware, software, networking, storage, and related technology
            required to run the Service. You understand that although you retain full
            rights to your data, it may be stored on third party storage and transmitted
            through third party networks.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Privacy Policy Changes
          </Heading>
          <LargeText>
            Although most changes are likely to be minor, The Gluten Project may change
            its Privacy Policy from time to time, and in The Gluten Project&#8217;s sole
            discretion. The Gluten Project encourages visitors to frequently check this
            page for any changes to its Privacy Policy.
          </LargeText>
        </Box>
      </App>
    )
  }
}
