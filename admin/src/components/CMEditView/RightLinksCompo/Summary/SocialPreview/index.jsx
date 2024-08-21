import React from 'react';

import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalLayout,
} from '@strapi/design-system';

import { Tabs } from '@strapi/design-system';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import { Alert, Box, Divider, EmptyStateLayout, Typography } from '@strapi/design-system';

import TabContent from './TabContent';

import { Illo } from '../../../../HomePage/Main/EmptyComponentLayout/illo';

const SocialPreview = ({ modifiedData, setIsVisible }) => {
  const { formatMessage } = useIntl();

  const seo = _.get(modifiedData, 'seo', null);
  const metaSocial = _.get(seo, 'metaSocial', []);
  const keywords = _.get(seo, 'keywords', null);

  return (
    <ModalLayout
      onClose={() => setIsVisible((prev) => !prev)}
      labelledBy="title"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          {formatMessage({
            id: getTrad('Plugin.name'),
            defaultMessage: 'SEO Plugin',
          })}
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Box paddingTop={2} paddingBottom={4} paddingLeft={4}>
          <Typography variant="beta">
            {formatMessage({
              id: getTrad('Button.social-preview'),
              defaultMessage: 'Social Preview',
            })}
          </Typography>
          <Box paddingTop={4}>
            <Divider />
          </Box>
        </Box>

        {seo ? (
          <Box padding={4}>
            <Tabs.Root
              label="Some stuff for the label"
              id="tabs"
              variant="simple"
            >
              <Tabs.List>
                {metaSocial &&
                  metaSocial.map((item, index) => {
                    if (item.socialNetwork)
                      return <Tabs.Trigger key={index}>{item.socialNetwork}</Tabs.Trigger>;
                  })}
              </Tabs.List>
                {metaSocial &&
                  metaSocial.map((item, index) => {
                    if (
                      item.socialNetwork &&
                      item.title &&
                      item.description
                    )
                      return (
                        <TabContent
                          key={index}
                          item={item}
                          keywords={keywords}
                          defaultMetaImage={seo?.metaImage}
                        />
                      );
                    else {
                      return (
                        <Box paddingTop={4} key={index}>
                          <Alert closeLabel="Close alert" title="Notice">
                            {formatMessage({
                              id: getTrad('Social-preview.alert'),
                              defaultMessage:
                                'Complete you social component to see the preview',
                            })}
                          </Alert>
                        </Box>
                      );
                    }
                  })}
            </Tabs.Root>
          </Box>
        ) : (
          <Box paddingLeft={4}>
            <EmptyStateLayout
              icon={<Illo />}
              content={formatMessage({
                id: getTrad('Modal.seo-component-empy'),
                defaultMessage: 'Your SEO component is empty...',
              })}
            />
          </Box>
        )}
      </ModalBody>
      <ModalFooter />
    </ModalLayout>
  );
};

export default SocialPreview;
