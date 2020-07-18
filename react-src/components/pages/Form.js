import React from 'react';
import {Avatar, Card, Heading, MediaCard} from "@shopify/polaris";
import Page from "../common/Page";
import styles from './Form.scss';

const Form = function() {
    return (
        <>
            <Page>
                <img
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
                />
                <div class={styles.product_info}>
                    <Avatar/>
                    <Heading>Online store dashboard</Heading>
                </div>
            </Page>
        </>
    )
}

export default Form
