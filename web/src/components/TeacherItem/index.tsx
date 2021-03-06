import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";
import { Article, Header, Footer } from './styles';

export interface Teacher {
  id: 1
  avatar: string,
  bio: string,
  cost: number,
  name: string,
  subject: string,
  whatsapp: string 
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
   api.post('connections', {
     user_id: teacher.id,
   }) 
  }

  return (
    <Article>
      <Header>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>
      <p>{teacher.bio}</p>

      <Footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </a>
      </Footer>
    </Article>
  );
}

export default TeacherItem;
