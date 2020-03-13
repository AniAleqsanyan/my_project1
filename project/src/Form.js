import React from 'react';
import './Contact.css';
export const Form = ({ data }) => {
  return <div className="contacts">
    {data.map(element => <div className='aaaa'>
      <div className='contact' key={element.email}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDQGRxqHJ2XZenPL496tC1EkP2b8wtvENQ4QIClnde2Hq1C7u3' />
        <div className='tvyalner'>
          <p><h3>{element.name}</h3></p>
          <p><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-4/177800/179-512.png"  height='20' width='20'/> {element.username}</p>
          <p><img src='https://lh3.googleusercontent.com/proxy/NwXR564_eVEcU-KpOwDztt4XA8HWbJ2LeM9ueFrndavmTXG0L_togAeWP1kZLm9ZosOS7lfPWeesEFLCIWJ1EFTwQPW8xEglKCQ2o1VcMQfTB-Y5jvk0bHU' height='20' width='20' /> <a href={`mailto:${element.email}`}>{element.email} </a></p>
          <p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-loouNniFM2llritDPzH05IHRYvdE2XGQe_tj8Xt67yoxn7lg' height='20' width='20' /> {element.phone}</p>
        </div>
      </div>
      <p className="Address">Address</p>
      <div className='street'>
        <p> Street:  {element.address.street}</p>
        <p> Suite:  {element.address.suite}</p>
        <p> City:  {element.address.city}</p>
        <p> Zipcode:  {element.address.zipcode}</p>
      </div>
    </div>)}
  </div>
}

export default Form;