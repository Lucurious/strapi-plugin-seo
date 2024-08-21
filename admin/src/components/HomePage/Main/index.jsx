import React from 'react';

import { Box, EmptyStateLayout, Flex, LinkButton, Table, Tbody, Td, Th, Thead, Tr, Typography } from '@strapi/design-system';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../utils';

import Plus from '@strapi/icons';

import { Illo } from './EmptyComponentLayout/illo';

import SettingsModal from './SettingsModal';

import {
  Tabs,
} from '@strapi/design-system';

import _ from 'lodash';

const Main = ({ contentTypes }) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Box padding={8}>
        <Tabs.Root label="label" id="tabs" variant="simple">
          <Tabs.List>
            <Tabs.Trigger>
              <Typography>
                {formatMessage({
                  id: getTrad('SEOPage.tab.collection-type-title'),
                  defaultMessage: 'Collection Types',
                })}
              </Typography>
            </Tabs.Trigger>
            <Tabs.Trigger>
              <Typography variant="omega">
                {formatMessage({
                  id: getTrad('SEOPage.tab.single-type-title'),
                  defaultMessage: 'Single Types',
                })}
              </Typography>
            </Tabs.Trigger>
            <Tabs.Trigger>
              <Typography variant="omega">
                {formatMessage({
                  id: getTrad('SEOPage.tab.plugin-title'),
                  defaultMessage: 'Plugins',
                })}
              </Typography>
            </Tabs.Trigger>
          </Tabs.List>
            <Tabs.Content>
              {/* TABLE */}
              <Table
                colCount={2}
                rowCount={contentTypes.collectionTypes.length}
              >
                <Thead>
                  <Tr>
                    <Th>
                      <Typography variant="sigma">
                        {formatMessage({
                          id: getTrad('SEOPage.tab-panel.column-name'),
                          defaultMessage: 'Name',
                        })}
                      </Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contentTypes &&
                  contentTypes.collectionTypes &&
                  !_.isEmpty(contentTypes.collectionTypes) ? (
                    contentTypes.collectionTypes.map((item) => (
                      <Tr key={item.uid}>
                        <Td>
                          <Typography textColor="neutral800">
                            {item.globalId}
                          </Typography>
                        </Td>
                        <Td>
                          <Flex justifyContent="right" alignItems="right">
                            {item.seo ? (
                              <SettingsModal item={item} />
                            ) : (
                              <LinkButton
                                startIcon={<Plus />}
                                variant="secondary"
                                href={`/admin/plugins/content-type-builder/content-types/${item.uid}`}
                              >
                                {formatMessage({
                                  id: getTrad('SEOPage.info.add'),
                                  defaultMessage: 'Add component',
                                })}
                              </LinkButton>
                            )}
                          </Flex>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Box padding={8} background="neutral0">
                      <EmptyStateLayout
                        icon={<Illo />}
                        content={formatMessage({
                          id: getTrad('SEOPage.info.no-collection-types'),
                          defaultMessage:
                            "You don't have any collection-types yet...",
                        })}
                        action={
                          <LinkButton
                            to="/plugins/content-type-builder"
                            variant="secondary"
                            startIcon={<Plus />}
                          >
                            {formatMessage({
                              id: getTrad(
                                'SEOPage.info.create-collection-type'
                              ),
                              defaultMessage:
                                'Create your first collection-type',
                            })}
                          </LinkButton>
                        }
                      />
                    </Box>
                  )}
                </Tbody>
              </Table>

              {/* END TABLE */}
            </Tabs.Content>
            <Tabs.Content>
              {/* TABLE */}
              <Table colCount={2} rowCount={contentTypes.singleTypes.length}>
                <Thead>
                  <Tr>
                    <Th>
                      <Typography variant="sigma">
                        {formatMessage({
                          id: getTrad('SEOPage.tab-panel.column-name'),
                          defaultMessage: 'Name',
                        })}
                      </Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contentTypes &&
                  contentTypes.singleTypes &&
                  !_.isEmpty(contentTypes.singleTypes) ? (
                    contentTypes.singleTypes.map((item) => (
                      <Tr key={item.uid}>
                        <Td>
                          <Typography textColor="neutral800">
                            {item.globalId}
                          </Typography>
                        </Td>
                        <Td>
                          <Flex justifyContent="right" alignItems="right">
                            {item.seo ? (
                              <SettingsModal item={item} />
                            ) : (
                              <LinkButton
                                startIcon={<Plus />}
                                variant="secondary"
                                href={`/admin/plugins/content-type-builder/content-types/${item.uid}`}
                              >
                                {formatMessage({
                                  id: getTrad('SEOPage.info.add'),
                                  defaultMessage: 'Add component',
                                })}
                              </LinkButton>
                            )}
                          </Flex>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Box padding={8} background="neutral0">
                      <EmptyStateLayout
                        icon={<Illo />}
                        content={formatMessage({
                          id: getTrad('SEOPage.info.no-single-types'),
                          defaultMessage:
                            "You don't have any single-types yet...",
                        })}
                        action={
                          <LinkButton
                            to="/admin/plugins/content-type-builder"
                            variant="secondary"
                            startIcon={<Plus />}
                          >
                            {formatMessage({
                              id: getTrad('SEOPage.info.create-single-type'),
                              defaultMessage: 'Create your first single-type',
                            })}
                          </LinkButton>
                        }
                      />
                    </Box>
                  )}
                </Tbody>
              </Table>

              {/* END TABLE */}
            </Tabs.Content>
            <Tabs.Content>
              {/* TABLE */}
              <Table colCount={2} rowCount={contentTypes.plugins.length}>
                <Thead>
                  <Tr>
                    <Th>
                      <Typography variant="sigma">
                        {formatMessage({
                          id: getTrad('SEOPage.tab-panel.column-name'),
                          defaultMessage: 'Name',
                        })}
                      </Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contentTypes &&
                  contentTypes.plugins &&
                  !_.isEmpty(contentTypes.plugins) ? (
                    contentTypes.plugins.map((item) => (
                      <Tr key={item.uid}>
                        <Td>
                          <Typography textColor="neutral800">
                            {item.globalId}
                          </Typography>
                        </Td>
                        <Td>
                          <Flex justifyContent="right" alignItems="right">
                            {item.seo ? (
                              <SettingsModal item={item} />
                            ) : (
                              <LinkButton
                                startIcon={<Plus />}
                                variant="secondary"
                                href={`/admin/plugins/content-type-builder/content-types/${item.uid}`}
                              >
                                {formatMessage({
                                  id: getTrad('SEOPage.info.add'),
                                  defaultMessage: 'Add component',
                                })}
                              </LinkButton>
                            )}
                          </Flex>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Box padding={8} background="neutral0">
                     {/* NEED LOCALE */}
                      <EmptyStateLayout
                        icon={<Illo />}
                        content={formatMessage({
                          id: getTrad('SEOPage.info.no-plugin-content-type'),
                          defaultMessage:
                            "You don't have any plugin content-type yet...",
                        })}
                      />
                    </Box>
                  )}
                </Tbody>
              </Table>

              {/* END TABLE */}
            </Tabs.Content>
        </Tabs.Root>
      </Box>
    </>
  );
};

export default Main;
