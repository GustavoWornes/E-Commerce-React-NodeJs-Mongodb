import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Checkbox,
    Button,

} from 'antd';

import 'antd/dist/antd.css';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 7,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 10,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const FormCadastro = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (

        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item name="nome"
                label="nome"
                rules={[{
                    required: true,
                    message: 'Nome requerido!',
                }]}>
                <Input />
            </Form.Item>


            <Form.Item name="sobrenome"
                label="Sobrenome"
                rules={[{
                    required: true,
                    message: 'Sobrenome requerido!',
                }]}>
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'Esse email não é valido!',
                    },
                    {
                        required: true,
                        message: 'Coloque seu email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Password requerido!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />

            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Password é requerido!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('As duas senhas não são iguais!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name="cep"
                label="cep"
                rules={[{
                    required: true,
                    message: 'Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="logradouro"
                label="logradouro"
                rules={[{
                    required: true,
                    message: 'Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="bairro"
                label="bairro"
                rules={[{
                    required: true,
                    message: ' Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="localidade"
                label="localidade"
                rules={[{
                    required: true,
                    message: ' Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="uf"
                label="uf"
                rules={[{
                    required: true,
                    message: ' Não pode deixar em branco !',
                }]}>
                <Select
                    style={{
                        width: 70,
                    }}
                >
                    <Option value="Acre">AC</Option>
                    <Option value="Alagoas">AL</Option>
                    <Option value="Amapá">AP</Option>
                    <Option value="Amazonas">AM</Option>
                    <Option value="Bahia">BA</Option>
                    <Option value="Ceara">CE</Option>
                    <Option value="Distrito Federal">DF</Option>
                    <Option value="Espírito Santo">ES</Option>
                    <Option value="Goiás">GO</Option>
                    <Option value="Maranhão">MA</Option>
                    <Option value="Mato Grosso">MT</Option>
                    <Option value="Mato Grosso do Sul">MS</Option>
                    <Option value="Minas Gerais">MG</Option>
                    <Option value="Pára">PA</Option>
                    <Option value="Paraíba">PB</Option>
                    <Option value="Paraná">PR</Option>
                    <Option value="Pernambuco">PE</Option>
                    <Option value="Piauí">PI</Option>
                    <Option value="Rio de Janeiro">RJ</Option>
                    <Option value="Rio Grande do Norte">RN</Option>
                    <Option value="Rio Grande do Sul">RS</Option>
                    <Option value="Rondônia">RO</Option>
                    <Option value="Roraima">RR</Option>
                    <Option value="Santa Catarina">SC</Option>
                    <Option value="São Paulo">SP</Option>
                    <Option value="Sergipe">SE</Option>
                    <Option value="Tocantins">TO</Option>



                </Select>
            </Form.Item>






            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the captcha you got!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>Get captcha</Button>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>

    );
};

export default () => <FormCadastro />;