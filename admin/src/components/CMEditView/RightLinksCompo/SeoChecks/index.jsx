import React from 'react';

import {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalLayout,
} from '@strapi/design-system';

import { Box, Button, EmptyStateLayout, Typography } from '@strapi/design-system';

import { Illo } from '../../../HomePage/Main/EmptyComponentLayout/illo';

import AlternativeTextCheck from './AlternativeTextCheck';
import CanonicalUrlCheck from './CanonicalUrlCheck';
import KeywordDensityCheck from './KeywordDensityCheck';
import LastUpdatedAtCheck from './LastUpdatedAtCheck';
import MetaDescriptionCheck from './MetaDescriptionCheck';
import MetaRobotCheck from './MetaRobotCheck';
import MetaSocialCheck from './MetaSocialCheck';
import MetaTitleCheck from './MetaTitleCheck';
import StructuredDataCheck from './StructuredDataCheck';
import WordCountCheck from './WordCountCheck';

import { getRichTextCheck } from '../../utils';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../utils';

import _ from 'lodash';

const SeoChecks = ({
  modifiedData,
  components,
  contentType,
  checks,
  setIsVisible,
}) => {
  const { formatMessage } = useIntl();

  const { wordCount, keywordsDensity, emptyAltCount } = getRichTextCheck(
    modifiedData,
    components,
    contentType
  );

  const seo = _.get(modifiedData, 'seo', null);

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
              id: getTrad('Button.seo-analyze'),
              defaultMessage: 'SEO Analyze',
            })}
          </Typography>
         
        </Box>

        {seo ? (
          <Box padding={4}>
            {checks?.metaTitle && (
              <MetaTitleCheck
                metaTitle={_.get(modifiedData, 'seo.metaTitle', null)}
                checks={checks}
              />
            )}
            {checks?.metaDescription && (
              <MetaDescriptionCheck
                metaDescription={_.get(
                  modifiedData,
                  'seo.metaDescription',
                  null
                )}
                checks={checks}
              />
            )}
            {checks?.wordCount && (
              <WordCountCheck wordCount={wordCount} checks={checks} />
            )}
            {checks?.keywordsDensity && (
              <KeywordDensityCheck
                keywordsDensity={keywordsDensity}
                checks={checks}
              />
            )}
            {checks?.metaSocial && (
              <MetaSocialCheck
                metaSocial={_.get(modifiedData, 'seo.metaSocial', null)}
                checks={checks}
              />
            )}
            {checks?.canonicalUrl && (
              <CanonicalUrlCheck
                canonicalUrl={_.get(modifiedData, 'seo.canonicalURL', null)}
                checks={checks}
              />
            )}
            {checks?.structuredData && (
              <StructuredDataCheck
                structuredData={_.get(modifiedData, 'seo.structuredData', null)}
                checks={checks}
              />
            )}
            {checks?.metaRobots && (
              <MetaRobotCheck
                metaRobots={_.get(modifiedData, 'seo.metaRobots', null)}
                checks={checks}
              />
            )}
            {checks?.alternativeText && (
              <AlternativeTextCheck
                intersections={_.get(emptyAltCount, 'intersections', null)}
                richTextAlts={_.get(emptyAltCount, 'richTextAlts', null)}
                altTexts={_.get(emptyAltCount, 'altTexts', null)}
                checks={checks}
              />
            )}
            {checks?.lastUpdatedAt && (
              <LastUpdatedAtCheck
                updatedAt={_.get(modifiedData, 'updatedAt', null)}
                checks={checks}
              />
            )}
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
      <ModalFooter
        startActions={
          <Button
            onClick={() => setIsVisible((prev) => !prev)}
            variant="tertiary"
          >
            {formatMessage({
              id: getTrad('Modal.cancel'),
              defaultMessage: 'Cancel',
            })}
          </Button>
        }
      />
    </ModalLayout>
  );
};

export default SeoChecks;
