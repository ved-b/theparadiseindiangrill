// src/components/Menu.jsx
import React from 'react';

// --- Complete Menu Data from your document ---
const menuData = {
  vegStarters: [
    { name: 'Idly / Podi / Sambar', price: '$7.99+', description: 'Two soft and spongy rice & lentil steamed cakes. Served with sambar and two chutneys.' },
    { name: 'Medhu Vada', price: '$5.99+', description: 'Two deep-fried lentil doughnuts. Can be served with Dahi, Thayir, Rasam, or Sambar for an additional charge.' },
    { name: 'Paradise Idly Vada Combo', price: '$9.99', description: '3 customized Idlis and a vada served with sides.' },
    { name: 'Samosa / Ragada Chaat', price: '$5.99+', description: 'Fried pyramidal savory pastry with veggies and spices. Can be served as a chaat.' },
    { name: 'Bhel / Paani Puri', price: '$7.99', description: 'A popular Indian street food known for its spicy & tangy taste.' },
    { name: 'Pav Bhaji', price: '$9.99', description: 'A well-known Indian snack with a vegetable mash served with a bun.' },
    { name: 'Vada Pav', price: '$8.99', description: 'A fried potato dumpling stuffed into a pav bun.' },
    { name: 'Gobi / Veg Balls Manchurian', price: '$10.99', description: 'Batter-fried cauliflower or veggie balls, tossed in a Manchurian sauce.' },
    { name: 'Mushroom / Babycorn Salt & Pepper (Spicy)', price: '$11.99', description: 'A paradise signature dish made from your selection of mushroom or babycorn.' },
    { name: 'Chili Paneer', price: '$12.99', description: 'Fried cottage cheese cubes tossed with a spicy Indo-Chinese sauce.' },
  ],
  nonVegStarters: [
    { name: 'Chicken 65 / Kothmiri Kodi (Spicy)', price: '$13.99', description: 'Paradise signature starter, deep-fried or shallow-fried.' },
    { name: 'Chicken / Mutton Pepper Fry / Sukka', price: '$13.99+', description: 'Your choice of meat cooked in a spicy peppery masala or sukka masala.' },
    { name: 'Masala Fried Fish (Fresh King Fish)', price: '$16.99', description: 'Fresh king fish darne in spicy S.I masala, shallow or deep fried.' },
    { name: 'Chicken Manchurian / Chilli / Garlic', price: '$13.99', description: 'Deep-fried chicken tossed with your choice of sauce.' },
    { name: 'Chicken Lollypop', price: '$12.99', description: 'Chicken drumsticks deep-fried and tossed with a spicy garlic sauce.' },
    { name: 'Fish Apollo (Spicy)', price: '$15.99', description: 'Paradise signature sauce tossed with fried fish cubes.' },
    { name: 'Chili Garlic Shrimp', price: '$15.99', description: 'Deveined jumbo shrimp fried and tossed with a chili garlic sauce.' },
    { name: 'Patrani Machili (Spicy)', price: '$18.99', description: 'Fish darne marinated with a mint-flavored paste and steamed in banana leaves.' },
  ],
  dosa: [
    { name: 'Uthappam', price: '$12.99+', description: 'Thick rice & lentil pancake. Toppings: Onion, Onion Chilli, Masala, Paneer, Cheese, or Veg.' },
    { name: 'Plain Dosa', price: '$8.99+', description: 'Thin rice & lentil crepe. Fillings available: Masala, Onion, or Onion Masala.' },
    { name: 'Mysore Dosa', price: '$10.99+', description: 'Thin rice & lentil crepe smeared with a spicy paste. Fillings available: Masala, Cheese, or Paneer.' },
    { name: 'Paneer Dosa', price: '$12.99+', description: 'Thin rice & lentil crepe with grated cottage cheese. Masala filling available.' },
    { name: 'Palak Dosa', price: '$10.99+', description: 'Thin rice & lentil crepe smeared with seasoned spinach paste. Paneer or Masala filling available.' },
    { name: 'Paper Dosa / Ghee Roast', price: '$11.99+', description: 'Thin, extra-crisp giant crepe, plain or with masala. Also available with ghee.' },
    { name: 'Rava Dosa', price: '$9.99+', description: 'Thin & crispy crepe from cream of wheat & rice flour. Fillings: Onion, Onion Masala, or Paneer.' },
  ],
  nonVegCurries: [
    { name: 'Chicken Chettinadu / Vindaloo / Malabar', price: '$15.99', description: 'Signature chicken dishes from the southern provinces of India.' },
    { name: 'Butter Chicken', price: '$16.99', description: 'A famous creamy tomato-based curry with charcoal-flavored chicken.' },
    { name: 'Kadai / Dum Ka / Methi / Khorma Chicken', price: '$15.99', description: 'Famous Northern Province chicken curries from around India.' },
    { name: 'Mutton Masala / Vindaloo / Nilgiri Khorma', price: '$17.99', description: 'Signature mutton preparations from the southern regions of India.' },
    { name: 'Aleppy Fish Curry (Fresh King Fish)', price: '$17.99', description: 'A very special fish curry from coastal Kerala cuisine.' },
    { name: 'Prawn Vartha Curry', price: '$16.99', description: 'A prawn semi-gravy made from hand-pounded spices from coastal Tamil Nadu.' },
  ],
  vegCurries: [
    { name: 'Daal Bhukara', price: '$14.99', description: 'Tri-dal mash made from the forbidden cuisine of Bukhara.' },
    { name: 'Daal Palak', price: '$13.99', description: 'Fresh spinach cooked with moong dal, flavored with clarified butter.' },
    { name: 'Bhindi-Do-Piyaza', price: '$14.99', description: 'Fresh Indian okra cooked in a doubled onion gravy.' },
    { name: 'Aloo Gobi', price: '$13.99', description: 'Fried potato and cauliflower simmered in a coriander-flavored gravy.' },
    { name: 'Malai Kofta', price: '$14.99', description: 'A rich onion gravy finished with cashew paste and malai croquettes.' },
    { name: 'Kadai Paneer', price: '$15.99', description: 'Fried cottage cheese cubes cooked in a brown onion gravy with veggies.' },
    { name: 'Paneer Saagwala', price: '$15.99', description: 'Cottage cheese cooked in a rich, fresh spinach gravy topped with cream.' },
    { name: 'Paneer Makhani', price: '$15.99', description: 'Rich creamy tomato-based gravy with butter and cottage cheese.' },
    { name: 'Diwani Hundi', price: '$14.99', description: 'A chef-special mixed veg curry topped with fresh cream.' },
    { name: 'Guttu Vankakaya Koora', price: '$14.99', description: 'Fried eggplant cooked in a Hyderabadi special gravy with peanut & sesame.' },
    { name: 'Avial', price: '$14.99', description: 'A coconut-based mixed veg delicacy from Kerala.' },
  ],
  biryaniRiceNoodles: [
    { name: 'Chicken Biryani', price: '$15.99', description: 'A signature preparation with bone-in chicken and jeeraha samba rice.' },
    { name: 'Paradise Special Chicken Biryani', price: '$17.99', description: 'Another chef-special biryani with boneless chicken.' },
    { name: 'Mutton Biryani (Weekends Only)', price: '$17.99', description: 'A thalappakatti style mutton with bone and jeeraha samba rice.' },
    { name: 'Veg Biryani', price: '$12.99', description: 'Hyderabadi layered biryani with fresh veggies and basmati rice.' },
    { name: 'Fried Rice (Veg / Egg / Chicken)', price: '$10.99+', description: 'An Indo-Chinese rice made with your choice of protein.' },
    { name: 'Hakka Noodles (Veg / Egg / Chicken)', price: '$10.99+', description: 'Flat Hakka style noodles tossed with your choice of selection.' },
  ],
  breads: [
    { name: 'Pulka / Lacha Paratta', price: '$2.99+', description: 'Layered bread cooked in a tandoori oven.' },
    { name: 'Tawa / Kerala / Aloo Paratta', price: '$2.99+', description: 'Layered flour bread made on a flat grill.' },
    { name: 'Poori with Bhaji / Channa', price: '$10.99', description: 'Deep-fried wheat bread served with potato masala or chickpeas.' },
    { name: 'Chole Bhature', price: '$12.99', description: 'Deep-fried flour bread served with chickpea masala.' },
  ],
  desserts: [
    { name: 'Beerani', price: '$4.99', description: 'A rich milk sweet made from cream of wheat and types of nuts.' },
    { name: 'Gulab Jamun', price: '$3.99', description: 'Reduced milk dumplings, fried and soaked in sugar syrup.' },
    { name: 'Semiya Payasam', price: '$4.99', description: 'Reduced milk with nuts and vermicelli turned into a payasam.' },
    { name: 'Ilaneer Payasam', price: '$4.99', description: 'A Paradise signature made from tender coconut water and milk.' },
    { name: 'Rasmalai', price: '$3.99', description: 'Milk dumplings soaked in reduced badam-flavored milk.' },
    { name: 'Ice Cream', price: '$3.99', description: 'Flavors available upon request.' },
  ],
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
      
      <MenuSection title="Vegetarian Starters" items={menuData.vegStarters} />
      <MenuSection title="Non-Vegetarian Starters" items={menuData.nonVegStarters} />
      
      <div className="text-center my-12 text-secondary/80">
          <p>(All Dosa & Idly are served with Sambar and two varieties of Chutney)</p>
      </div>
      <MenuSection title="Dosa & Uthappam" items={menuData.dosa} />

      <MenuSection title="Vegetarian Curries" items={menuData.vegCurries} />
      <MenuSection title="Non-Vegetarian Curries" items={menuData.nonVegCurries} />
      <MenuSection title="Biryani, Rice & Noodles" items={menuData.biryaniRiceNoodles} />
      <MenuSection title="Breads" items={menuData.breads} />
      <MenuSection title="Desserts" items={menuData.desserts} />

      <div className="text-center mt-16 text-sm text-secondary/60">
        <p>Our food may contain nuts, soya, dairy, and other allergens. Please let us know of any allergies before placing your order.</p>
      </div>
    </section>
  );
}

export default Menu;
