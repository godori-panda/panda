import React, {useCallback, useState} from 'react';
import {Button, Checkbox, Form, FormLayout, Heading, Link, TextContainer, TextField, TextStyle} from "@shopify/polaris";
import styles from './Order.scss';

const Order = function() {
    const [newsletter, setNewsletter] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback((_event) => {
        setEmail('');
        setNewsletter(false);
    }, []);

    const handleNewsLetterChange = useCallback(
        (value) => setNewsletter(value),
        [],
    );

    const handleEmailChange = useCallback((value) => setEmail(value), []);

    return (
        <Form onSubmit={handleSubmit}>
            <FormLayout>
                <FormLayout.Group>
                    <TextField type="text" label="받는사람 이름" onChange={() => {}} />
                    <TextField type="text" label="전화 번호" onChange={() => {}} />
                </FormLayout.Group>
                <TextField label="배송 주소" onChange={() => {}} />
                <TextField label="상세 주소" onChange={() => {}} />
                <TextField label="배송 메세지" onChange={() => {}} />

                <TextContainer>
                    주문 품목, 가격 및 안내를 확인하고 동의합니다.
                </TextContainer>
                <div>
                    <div className={styles.agreement}>
                        <div>배송 안내, 교환 및 반품 안내</div>
                        <div className={styles.link}><Button plain>다시보기</Button></div>
                    </div>
                    <div className={styles.agreement}>
                        <div>개인정보 수집 및 동의</div>
                        <div className={styles.link}><Button plain>내용 보기</Button></div>
                    </div>
                </div>
                <Button submit fullWidth>주문 완료</Button>
                <TextStyle variation="subdued">고도리는 솔루션 제공 업체로써, 통신판매의 주체가 아닙니다. 상품 정보 고시와 상품 전달, 거래에 대한 의무 책임은 판매자에게 있습니다.</TextStyle>
            </FormLayout>
        </Form>
    );
}

export default Order
