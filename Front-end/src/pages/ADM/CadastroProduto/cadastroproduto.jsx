
import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Col,
  Button,Layout, Alert, Row,
} from 'antd';
import { useParams } from "react-router";
import {api,updateProduct} from "../../../Services/services"
import { Content } from 'antd/lib/layout/layout';
import './style.css'
import { NavLink } from "react-router-dom";
import { utils } from "../../../utils";
const cor = [
    {
        value:'Vermelho',
        label:'Vermelho'
    },
    {
        value:'Azul',
        label:'Azul'
    },
    {
        value:'Roxo',
        label:'Roxo'
    },
    {
        value:'Preto',
        label:'Preto'
    },
    {
        value:'Branco',
        label:'Branco'
    }
]
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
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

const Cadastroproduto = () => {
    
    const {id} = useParams()
    const [editProduct,setEditProduct] = useState([])
   
    useEffect(()=>{
   
      api.get(`/product/${id}`).then(({data}) =>{
       setEditProduct(data)
       utils.setIdProduct(id)
      });
      console.log("Esse é o id",id)
      
      
    },[id])

    const [form] = Form.useForm();
  const onFinish = async ({ name,preco,cor,tamanho,terreno,sistema_de_amarracao,peso_aproximado,impermeabilizaao,drop,ajuste,descricao,precoproduto,img_principal,img_um,img_tres,img_quatro,img_dois,img_cinco}) => {
    utils.updatedProduct()
    return  update (name,preco,cor,tamanho,terreno,sistema_de_amarracao,peso_aproximado,impermeabilizaao,drop,ajuste,descricao,precoproduto,img_principal,img_um,img_tres,img_quatro,img_dois,img_cinco)
};
const update = async (name,preco,cor,tamanho,terreno,sistema_de_amarracao,peso_aproximado,impermeabilizaao,drop,ajuste,descricao,precoproduto,img_principal,img_um,img_tres,img_quatro,img_dois,img_cinco) => {
  
  const response = await updateProduct(name,preco,cor,tamanho,terreno,sistema_de_amarracao,peso_aproximado,impermeabilizaao,drop,ajuste,descricao,precoproduto,img_principal,img_um,img_tres,img_quatro,img_dois,img_cinco)
  console.log('resposta cadastro', response.data)
}


    


    const ValoresProduto = {
      name:`${editProduct.name}`,
      preco:`${editProduct.preco}`,
      cor:`${editProduct.cor}`,
      tamanho:`${editProduct.tamanho}`,
      terreno:`${editProduct.terreno}`,
      sistema_de_amarracao:`${editProduct.sistema_de_amarracao}`,
      peso_aproximado:`${editProduct.peso_aproximado}`,
      impermeabilizaao:`${editProduct.impermeabilizaao}`,
      drop:`${editProduct.drop}`,
      ajuste:`${editProduct.ajuste}`,
      descricao:`${editProduct.descricao}`,
      precoproduto:`${editProduct.precoproduto}`,
      img_principal:`${editProduct.img_principal}`,
      img_um:`${editProduct.img_um}`,
      img_dois:`${editProduct.img_dois}`,
      img_tres:`${editProduct.img_tres}`,
      img_quatro:`${editProduct.img_quatro}`,
      img_cinco:`${editProduct.img_cinco}`,
    }
    return (
      <Layout>
        <Content id="form">
        <Col  span={12} offset={6}>
          
               
           <Form
               {...formItemLayout}
               form={form}
               name="atualizar"
               onFinish={onFinish}
               initialValues={form.setFieldsValue(ValoresProduto)}
              
             ><Form.Item
             name="name"
             label="Nome"
             rules={[
               {
                 required: true,
                 message: 'Item obrigatorio',
               },
             ]}
           >
             <Input/>
           </Form.Item>
         
           <Form.Item
             name="precoproduto"
             label="Preço"
             rules={[
               {
                 required: true,
                 message: 'Item obrigatorio',
               },
             ]}
           >
             <Input/>
           </Form.Item>
           <Form.Item
             name="cor"
             label="Cor"
             rules={[
               {
                
                 required: true,
                 message: 'Selecione uma opção',
               },
             ]}
           >
             <Input />
           </Form.Item>
           <Form.Item
             name="tamanho"
             label="Tamanho"
             rules={[
               {
                
                 required: true,
                 message: 'Selecione uma opção',
               },
             ]}
           >
              <Input />
           </Form.Item>
       
       
                 <Form.Item
             name="terreno"
             label="Habitual Residence"
             rules={[
               {
                
                 required: true,
                 message: 'Selecione uma opção',
               },
             ]}
           >
              <Input />
           </Form.Item>
       
           <Form.Item
             name="sistema_de_amarracao"
             label="Sistema de Amarração"
             rules={[
               {
                
                 required: true,
                 message: 'Selecione uma opção',
               },
             ]}
           >
              <Input />
           </Form.Item>
       
          
           <Form.Item
             name="peso_aproximado"
             label="Peso aproximado"
             rules={[
               {
                 required: true,
                 message: 'Item obrigatorio',
               },
             ]}
           >
             <Input />
           </Form.Item>
       
          
       
           
           <Form.Item
             name="impermeabilizacao"
             label="Impermeabilização"
             rules={[
               {
                 required: true,
                 message: 'Item obrigatorio',
               },
             ]}
           >
             <Input/>
           </Form.Item>
           <Form.Item
             name="drop"
             label="Drop (mm)"
             rules={[
               {
                 required: true,
                 message: 'Item obrigatorio',
               },
             ]}
           >
             <Input />
           </Form.Item>
           <Form.Item
             name="ajuste"
             label="Ajuste"
             rules={[
               {
                
                 required: true,
                 message: 'Selecione uma opção',
               },
             ]}
           >
             <Input />
           </Form.Item>
           <Form.Item
             name="descricao"
             label="Descrição"
             rules={[
               {
                 required: true,
                 message: 'Item obrigatorio',
               },
             ]}
           >
             <Input.TextArea />
           </Form.Item>
           <Form.Item
               name="img_principal"
               label="Imagem principal"
               rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
             >
               <Input placeholder="input placeholder" />
             </Form.Item>
           <Form.Item
               name="img_um"
               label="Primeira imagem"
               rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
             >
               <Input placeholder="input placeholder" />
             </Form.Item>
             <Form.Item
               name="img_dois"
               label="Segunda imagem"
               rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
             >
               <Input placeholder="input placeholder" />
             </Form.Item>
             <Form.Item
               name="img_tres"
               label="Terceira imagem"
               rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
             >
               <Input placeholder="input placeholder" />
             </Form.Item>
             <Form.Item
               name="img_quatro"
               label="Quarta imagem"
               rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
             >
               <Input placeholder="input placeholder" />
             </Form.Item>
             <Form.Item
               name="img_cinco"
               label="Quinta imagem"
               rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
             >
               <Input placeholder="input placeholder" />
             </Form.Item>
          
       
          
         
          <Form.Item {...tailFormItemLayout}>
             <Button type="primary" className="buttonDescricao"  htmlType="submit">
               Confirmar
             </Button>
            <NavLink to={'/adm'}>
            <Button type="primary"  className="buttonDescricao" htmlType="submit">
               Voltar
             </Button>
            </NavLink>
             
           </Form.Item>
          
        
             </Form>   
            
         </Col>
        </Content>
      </Layout>
    );
  };


export default Cadastroproduto