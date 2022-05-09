import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { utils } from "../../utils";
import { api } from "../../Services/services";
import {
    Form,
    Input,
    Select,
    Button
} from 'antd';
import { updateUser } from "../../Services/services"
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
            span: 0,
            offset: 0,
        },
        sm: {
            span: 8,
            offset: 8,
        },
    },
};

const PerfilUser = () => {

    const [user, setUser] = useState([])
    const { id } = useParams()

    useEffect(() => {

        api.get(`/perfil/${id}`).then(({ data }) => {
            setUser(data)
        });
      
       


    }, [])

    const [form] = Form.useForm();


    const onFinish = async ({ name, sobrenome, email, password, cep, logradouro, bairro, uf }) => {

        return update(name, sobrenome, email, password, cep, logradouro, bairro, uf,)
    };


    const update = async (name, sobrenome, email, password, cep, logradouro, bairro, uf) => {
        const response = await updateUser(name, sobrenome, email, password, cep, logradouro, bairro, uf)
        console.log('resposta cadastro', response.data)
    }

    const atualizar = () => {
        utils.notificationUpdate()

        return
    }

    const logout = () => {

        utils.clearLocalStore()
        utils.notificationLogout()
        return
    }





    const ValoresIniciais = {
        name: `${user.name}`,
        sobrenome: `${user.sobrenome}`,
        email: `${user.email}`,
        password: "",
        confirm: "",
        cep: `${user.cep}`,
        logradouro: `${user.logradouro}`,
        bairro: `${user.bairro}`,
        localidade: `${user.logradouro}`,
        uf: `${user.uf}`
    }

    return (
        <div>
            <div>
                <h1></h1>
                {/* 
                {JSON.stringify(user, null, 2)} */}
                <Form

                    {...formItemLayout}
                    form={form}
                    name="atualizar"
                    onFinish={onFinish}
                    initialValues={form.setFieldsValue(ValoresIniciais)}
                    scrollToFirstError

                >

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
                        initialValue="Gustavo"
                    >
                        <Input

                        />

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
                        <Input placeholder={user.sobrenome} />
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
                        <Input placeholder={user.email} />
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
                        label="Cep"
                        rules={[{

                            required: true,
                            message: 'Não pode deixar em branco !',
                        },
                        {
                            min: 7,
                            message: 'Cep inválido'
                        },
                        {
                            max: 10,
                            message: 'Cep inválido'
                        }
                        ]}>
                        <Input placeholder={user.cep} />
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

                    <Form.Item name="uf"
                        label="Uf"
                        rules={[{
                            required: true,
                            message: ' Não pode deixar em branco !',
                        }]}>
                        <Select placeholder={user.uf}
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




                    <Form.Item {...tailFormItemLayout}>
                        <Button onClick={atualizar} type="primary" htmlType="submit" block>
                            Atualizar
                        </Button>

                    </Form.Item>
                    <Form.Item {...tailFormItemLayout} >
                        <Button onClick={logout} type="primary" block >
                            Logout

                        </Button>

                    </Form.Item>

                </Form>
            </div>

        </div>


    )
}

export default PerfilUser