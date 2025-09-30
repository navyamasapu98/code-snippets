# Dependent Reference Filtering (Catalog Client Script)

## Purpose
This snippet demonstrates how to filter a catalog reference variable (e.g., **City**) based on the value of another variable (e.g., **Country**) using **GlideAjax**.

It improves the catalog user experience by ensuring that users only see relevant options.

---

## How It Works
- **Country** variable (reference) triggers an **onChange Catalog Client Script**.  
- The client script calls a **Script Include** (`CatalogCityFilter`) with GlideAjax.  
- The Script Include queries the `u_city` table to return only cities that belong to the selected country.  
- The client script clears and repopulates the **City** variable with the filtered results.  

---

## Files
- `dependent_reference.js` – Catalog Client Script (onChange on the Country variable)  
- `CatalogCityFilter` – Script Include (must be created separately in your instance)

---

## Usage
1. Add a **Country** reference variable to your catalog item.  
2. Add a **City** reference variable.  
3. Create a Script Include named **CatalogCityFilter** with the provided code.  
4. Create a Catalog Client Script (onChange on the Country variable) with the provided code.  
5. Test by selecting a Country → City variable options update dynamically.

---

## Example Use Case
- Country = *India* → City options: *Hyderabad, Bangalore, Mumbai*  
- Country = *USA* → City options: *New York, San Francisco, Austin*
