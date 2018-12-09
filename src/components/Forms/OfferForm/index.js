import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Button from 'components/UI/Button';
import Dropdown from 'components/UI/Dropdown';
import styles from './styles.module.scss';

import { convertLocation } from 'services/helpers';

export const OfferForm = ({ onSubmit, onChange, offer, categories, onChangeCategory }) => {
  // const enabled = values.email.length > 3 && values.username.length > 0;
  const enabled = false;
  return (
    <Fragment>
      {
        offer.id &&
        <div className={styles.OfferForm}>
          <div
            className={styles.OfferForm__image}
            style={{ backgroundImage: `url(${offer.imagesUrls[0]})` }}
          />
          <div className={styles.OfferForm__form}>
            <Input
              placeholder="Title"
              onChange={e => onChange(e, 'title')}
              value={offer.title}
            />
            <Input
              placeholder="Description"
              inputtype="textarea"
              onChange={e => onChange(e, 'description')}
              value={offer.description}
            />
            <Dropdown
              title={`${offer.category[0].toUpperCase()}${offer.category.slice(1)}`}
              values={categories}
              onSelect={onChangeCategory}
            />
            <div className={styles.OfferForm__form__info}>
              <div>{`Company: ${offer.business.brandName}`}</div>
              {
                offer.locations.map((location, index) => (
                  <div key={index}>{convertLocation(location.address)}</div>
                ))
              }
              {offer.fullPrice && <div>{`Price: ${offer.fullPrice}`}</div>}
              {offer.discount && <div>{`Discount: ${offer.discount}`}</div>}
            </div>
            <Button
              disabled={!enabled}
              block
              onClick={onSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      }
    </Fragment>
  );
};
// <Input
//   placeholder="Email"
//   onChange={e => onChange(e, 'email')}
//   value={values.email}
// />
//   <Input
//     placeholder="Name"
//     onChange={e => onChange(e, 'username')}
//     value={values.username}
//   />