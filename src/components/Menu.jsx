// src/components/Menu.jsx
import React from 'react';

const menuData = {
  appetizers: [
    { name: 'Samosa Chaat', price: '$12', description: 'Crispy samosas crushed and topped with yogurt, tamarind chutney, and spices.' },
    { name: 'Hara Bhara Kebab', price: '$14', description: 'Pan-fried spinach and vegetable patties, served with mint chutney.' },
  ],
  mains: [
    { name: 'Lamb Rogan Josh', price: '$28', description: 'Tender lamb cooked in a rich, aromatic gravy of Kashmiri spices.' },
    { name: 'Murgh Makhani (Butter Chicken)', price: '$26', description: 'Grilled chicken simmered in a smooth, creamy tomato and butter sauce.' },
    { name: 'Palak Paneer', price: '$22', description: 'Soft paneer cheese in a vibrant, creamy spinach gravy with garlic and garam masala.' },
  ],
  desserts: [
    { name: 'Gulab Jamun with Rabri', price: '$10', description: 'Soft, syrup-soaked milk solids served with thickened sweet milk.' },
    { name: 'Kesar Pista Kulfi', price: '$9', description: 'Traditional Indian ice cream flavored with saffron and pistachios.' },
  ]
};

const MenuSection = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="text-4xl font-serif text-accent mb-8 text-center">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map(item => (
        <div key={item.name}>
          <div className="flex justify-between items-baseline">
            <h4 className="text-xl font-bold">{item.name}</h4>
            <p className="text-xl font-bold text-accent">{item.price}</p>
          </div>
          <p className="text-secondary/80 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

function Menu() {
  return (
    <section id="menu" className="container mx-auto py-24 px-4">
      <h2 className="text-5xl font-serif text-center mb-16">Our Culinary Offerings</h2>
      <MenuSection title="Appetizers" items={menuData.appetizers} />
      <MenuSection title="Main Courses" items={menuData.mains} />
      <MenuSection title="Desserts" items={menuData.desserts} />
    </section>
  );
}

export default Menu;
