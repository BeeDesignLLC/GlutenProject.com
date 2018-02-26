// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import ArticleHeading from '../components/ArticleHeading'
import LargeText from '../components/LargeText'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="The Gluten Project Legal Disclaimer">
        <Box area="main">
          <ArticleHeading f={6}>Legal Disclaimer</ArticleHeading>

          <LargeText>
            The Gluten Project, operated by Bee Design LLC, has made every attempt to
            ensure the accuracy and reliability of the information provided on this
            website. However, the information is provided &#8220;as is&#8221; without
            warranty of any kind. The Gluten Project does not accept any responsibility or
            liability for the accuracy, content, completeness, legality, or reliability of
            the information contained on this website.
          </LargeText>
          <LargeText>
            No warranties, promises and/or representations of any kind, expressed or
            implied, are given as to the nature, standard, accuracy or otherwise of the
            information provided in this website nor to the suitability or otherwise of
            the information to your particular circumstances.
          </LargeText>
          <LargeText>
            We cannot and will not guarantee that this website is free from computer
            viruses or anything else that has destructive properties.
          </LargeText>
          <LargeText>
            We shall not be liable for any loss or damage of whatever nature (direct,
            indirect, consequential, or other) whether arising in contract, tort or
            otherwise, which may arise as a result of your use of (or inability to use)
            this website, or from your use of (or failure to use) the information on this
            site. This website provides links to other websites owned by third parties.
            The content of such third party sites is not within our control, and we cannot
            and will not take responsibility for the information or content thereon. Links
            to such third party sites are not to be taken as an endorsement by The Gluten
            Project of the third party site, or any products promoted, offered or sold on
            the third party site, nor that such sites are free from computer viruses or
            anything else that has destructive properties. We cannot and do not take
            responsibility for the collection or use of personal data from any third party
            site. In addition, we will not accept responsibility for the accuracy of third
            party advertisements.
          </LargeText>
          <LargeText>
            Bee Design LLC is a limited liability company registered in the US state of
            Wyoming, and its registered agent is at 1623 Central Ave Ste 18, Cheyenne, WY 82001.
          </LargeText>
        </Box>
      </App>
    )
  }
}
