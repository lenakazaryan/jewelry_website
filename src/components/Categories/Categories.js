import styles from "../Categories/Categories.module.css";
function Categories() {
  return (
    <div>
      <div className={styles.shopCategoriesTypes}>
        <div>
          <input type="checkbox" id="bracelets" name="bracelets" />
          <label htmlFor="bracelets">Bracelets</label>
        </div>
        <div>
          <input type="checkbox" id="earrings" name="earrings" />
          <label htmlFor="earrings">Earrings</label>
        </div>
        <div>
          <input type="checkbox" id="necklaces" name="necklaces" />
          <label htmlFor="necklaces">Necklaces</label>
        </div>
        <div>
          <input type="checkbox" id="rings" name="rings" />
          <label htmlFor="rings">Rings</label>
        </div>
      </div>
    </div>
  );
}

export default Categories;
