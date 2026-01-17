

// ১. নামের মধ্যে "Phone" আছে এমন প্রোডাক্ট খুঁজবে। ২. তারপর দেখবে সেগুলোর দাম ৫০,০০০ এর বেশি কিনা। ৩. যদি বেশি হয়, তবে Spread Operator ব্যবহার করে ওই প্রোডাক্টের সাথে নতুন একটা প্রপার্টি discount: "10%" যোগ করে নতুন একটা অ্যারে রিটার্ন করবে।
const items = [
  { name: "Samsung M31", price: 20000, category: "Phone" },
  { name: "iPhone 13", price: 90000, category: "Phone" },
  { name: "Sony Bravia", price: 55000, category: "TV" },
  { name: "HP Laptop", price: 45000, category: "Laptop" },
  { name: "Logitech Mouse", price: 2000, category: "Accessories" }
];

const phone = (searchTerm)=>{
  const list = items.filter((item)=>item.category.toLowerCase().includes(searchTerm.toLowerCase())).filter((item)=>item.price>50000)
  const discount = list.map((item)=>({
    ...item,
    discount:"10%"
  }))
 console.log(discount)
}
phone("phone")

// চ্যালেঞ্জ ২: "অ্যারে থেকে ডুপ্লিকেট সরানো ও সর্টিং"
// তোর কাছে কিছু রোল নম্বর আছে কিন্তু সেখানে কিছু ভুল করে দুবার উঠে গেছে: const rollNumbers = [5, 2, 8, 5, 1, 9, 2, 10];
const rollNumbers = [5, 2, 8, 5, 1, 9, 2, 10];
const duplicate = [...new Set(rollNumbers)].sort((a,b)=>a-b)
console.log(duplicate)


// তোর কাজ: ১. Rest Operator ব্যবহার করে password আর secretPin আলাদা করে ফেলবি। ২. বাকি সব ডেটা নিয়ে একটা নতুন অবজেক্ট publicProfile বানাবি যেটা কনসোলে দেখাবি। (সিকিউরিটির জন্য এটা খুব দরকারি!)
const rawUser = {
  name: "Sufian",
  age: 26,
  password: "secret123",
  address: "Dhaka",
  secretPin: 9988
};

const {password,secretPin,...publicProfile} = rawUser
console.log(publicProfile)


// চ্যালেঞ্জ ৪: "প্যাগিনেশন লজিক চেক"
// তোর কাছে ১০টা নাম আছে। তুই পেজ নম্বর ৩ এ আছিস এবং প্রতি পেজে ৩টা করে নাম দেখাতে চাস। const names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const page= 3;
const limit=3;
// 3-1
const start = (page-1)*limit 
const end = start + limit;
const pagination = names.slice(start, end)
console.log(pagination)
