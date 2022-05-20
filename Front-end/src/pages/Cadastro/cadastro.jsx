import React from 'react';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button
} from 'antd';

import 'antd/dist/antd.css';
import { userRegistration } from '../../Services/services';
import { utils } from '../../utils';
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

    const onFinish = async ({ name, sobrenome, email, password, cep, logradouro, bairro, uf }) => {
        return newUser(name, sobrenome, email, password, cep, logradouro, bairro, uf)
    };


    const newUser = async (name, sobrenome, email, password, cep, logradouro, bairro, uf) => {
        const response = await userRegistration(name, sobrenome, email, password, cep, logradouro, bairro, uf)
        utils.notificationRegister()
    }
    


    return (

        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            
            scrollToFirstError
        ><h1></h1>
            <Form.Item name="name"
                label="Nome"
                rules={[{
                    required: true,
                    message: 'Nome requerido!',
                },
                {
                    max: 20,
                    message: 'Nome não pode exceder 20 caracteres',
                },
                {
                    min: 3,
                    message: 'Nome é muito curto'
                }
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item name="sobrenome"
                label="Sobrenome"
                rules={[
                    {
                        required: true,
                        message: 'Sobrenome requerido!'
                    },
                    {
                        min: 5,
                        message: 'Nome é muito curto'
                    },
                    {
                        max: 20,
                        message: 'Nome não pode exceder 20 caracteres',
                    },
                ]}>
                <Input /> 
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'Email inválido',
                    },
                    {
                        required: true,
                        message: 'Coloque seu email!',
                    },
                    {
                        min: 5,
                        message: 'Email é muito curto'
                    },
                    {
                        max: 50,
                        message: 'Esse email excedeu o número de caracteres'
                    }
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
                    {
                        min: 7,
                        message: 'Senha deve haver um minimo de 7 caracteres'
                    }
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
                label="Cep "
                
                rules={[{
                   
                    required: true,
                    message: 'Não pode deixar em branco !',
                },
                {
                    min: 7,
                    message: 'Cep inválido, Usar Somente numeros'
                },
                {
                    max: 9,
                    message: 'Cep inválido, Usar Somente numeros'
                }
                ]}>
                <Input />
            </Form.Item>
            <Form.Item name="logradouro"
                label="Logradouro"
                rules={[{
                    required: true,
                    message: 'Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="bairro"
                label="Bairro"
                rules={[{
                    required: true,
                    message: ' Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="localidade"
                label="Localidade"
                rules={[{
                    required: true,
                    message: ' Não pode deixar em branco !',
                }]}>
                <Input />
            </Form.Item>
            <Form.Item name="uf"
                label="Uf"
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






            {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
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
            </Form.Item> */}

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
                <Button   type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>

    );
};

export default FormCadastro