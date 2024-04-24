# cell-phone-order-manager

Revised Prompt
Objective: Develop a Django-based inventory management system for cell-phone orders that supports batch processing, order creation, batch searching, and shipping/invoicing.
Core Components:
Database Models:
Order: Tracks each order with a unique order number, tracking number, status, and total cost.
Product: Represents cell-phone models with attributes for make and model.
OrderItem: Connects orders to products, detailing the quantity and cost per item in each order.
Order Creation:
Implement a form to create new orders. This form should allow the user to input order details (order number, tracking number, status, total cost) and associate multiple products (cell phones) as part of the order.
Each product added to the order should specify the quantity and cost per item.
Batch Association:
A "batch" in this context refers to a group of cell phones associated with a specific order. The system should automatically group products added to an order into a batch.
Provide a mechanism to associate batches with specific orders for easy tracking and management.
Batch Searching:
Develop a page to list all batches, displaying relevant details such as batch ID (linked to the order number), total cost, and the make and model of cell phones included in each batch.
Include search functionality to filter batches by various criteria (e.g., order number, make, model).
Shipping/Invoicing:
Implement functionality to process shipments and generate invoices for orders ready to be shipped. This includes changing the status of an order to "Shipped" and detailing the shipment's tracking information.
Provide options for printing or emailing invoices, which include order details, the list of products, quantities, and the total cost.
Technical Requirements:
Utilize Django forms for data input (e.g., creating orders, adding products to orders).
Ensure data integrity by implementing proper foreign key relationships in models.
Use Django's admin interface for basic CRUD (Create, Read, Update, Delete) operations on orders, products, and order items.
Implement Django views and templates for the user interface, including forms for order creation, batch listing/search page, and shipment processing.
Secure the application using Django's built-in authentication mechanisms.
Advanced Features (Optional):
Add functionality for batch updates, allowing modifications to existing orders and their associated products.
Implement an API layer using Django Rest Framework for future integration with external systems or for developing a mobile app interface.
Development Approach:
Start by setting up the Django project and application structure.
Define the models and migrate them to create the database schema.
Develop the forms, views, and templates for each component of the system.
Test each part of the system thoroughly to ensure reliability and usability.



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/cell-phone-order-manager.git
cd cell-phone-order-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
