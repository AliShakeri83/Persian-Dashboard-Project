import React, { useEffect, useState } from "react";

import "./AddNewOff.css";

export default function AddNewOff({ addDiscount, allProducts }) {
  const [allProduct, setAllProduct] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);

  const [offCode, setOffCode] = useState("");
  const [offPrecent, setOffPrecent] = useState("");
  const [offDate, setOffDate] = useState("");
  const [offProductTitle, setOffProductTitle] = useState("");

  const [errors, setErrors] = useState({
    code: "",
    precent: "",
    date: "",
    product: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setAllProduct(allProducts);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [allProducts]);

  const validateInputs = () => {
    const newErrors = {
      code: "",
      precent: "",
      date: "",
      product: "",
    };

    let isValid = true;

    if (!offCode.trim()) {
      newErrors.code = "کد تخفیف الزامی است";
      isValid = false;
    } else if (offCode.length < 3) {
      newErrors.code = "کد تخفیف باید حداقل ۳ کاراکتر باشد";
      isValid = false;
    }

    if (!offPrecent.trim()) {
      newErrors.precent = "درصد تخفیف الزامی است";
      isValid = false;
    } else {
      const percentValue = Number(offPrecent);
      if (isNaN(percentValue)) {
        newErrors.precent = "درصد تخفیف باید عدد باشد";
        isValid = false;
      } else if (percentValue <= 0 || percentValue > 100) {
        newErrors.precent = "درصد تخفیف باید بین ۱ تا ۱۰۰ باشد";
        isValid = false;
      }
    }

    if (!offDate) {
      newErrors.date = "لطفا مدت اعتبار را انتخاب کنید";
      isValid = false;
    } else {
      const daysValue = Number(offDate);
      if (daysValue <= 0) {
        newErrors.date = "مدت اعتبار نامعتبر است";
        isValid = false;
      }
    }

    if (!offProductTitle) {
      newErrors.product = "لطفا یک محصول انتخاب کنید";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const addOffNewCode = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      const errorMessage = Object.values(errors)
        .filter((error) => error)
        .join("\n");

      if (errorMessage) {
        alert(errorMessage);
      }
      return;
    }

    const selectedProduct = allProduct.find(
      (product) => product.title === offProductTitle
    );

    if (!selectedProduct) {
      alert("محصول انتخاب شده یافت نشد");
      return;
    }

    const newOffCode = {
      code: offCode.trim(),
      precent: Number(offPrecent),
      productID: selectedProduct.id,
      productName: offProductTitle,
      date: Number(offDate),
      isActive: true,
    };

    addDiscount(newOffCode);
    emptyInputs();
  };

  const emptyInputs = () => {
    setOffCode("");
    setOffPrecent("");
    setOffDate("");
    setOffProductTitle("");
    setErrors({
      code: "",
      precent: "",
      date: "",
      product: "",
    });
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <>
      <div className="off-main">
        <h1 className="off-title">افزودن کد تخفیف جدید</h1>

        <form action="#" className="add-off-form" onSubmit={addOffNewCode}>
          <div className="add-off-form-wrap">
            <div className="add-off-form-group padd">
              <input
                value={offCode}
                onChange={handleInputChange(setOffCode, "code")}
                type="text"
                placeholder="لطفا کد تخفیف را وارد نمایید"
                className={`add-products-input ${
                  errors.code ? "input-error" : ""
                }`}
              />
              {errors.code && (
                <span
                  className="error-text"
                  style={{
                    color: "#dc3545",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  {errors.code}
                </span>
              )}
            </div>

            <div className="add-off-form-group">
              <input
                value={offPrecent}
                onChange={handleInputChange(setOffPrecent, "precent")}
                type="text"
                placeholder="لطفا درصد تخفیف را وارد نمایید (۱-۱۰۰)"
                className={`add-products-input ${
                  errors.precent ? "input-error" : ""
                }`}
              />
              {errors.precent && (
                <span
                  className="error-text"
                  style={{
                    color: "#dc3545",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  {errors.precent}
                </span>
              )}
            </div>

            <div>
              <select
                value={offDate}
                onChange={handleInputChange(setOffDate, "date")}
                className={`option-select-box ${
                  errors.date ? "input-error" : ""
                }`}
              >
                <option value="">مدت اعتبار را انتخاب کنید</option>
                <option value="7">۷ روز</option>
                <option value="14">۱۴ روز</option>
                <option value="30">۳۰ روز</option>
                <option value="60">۶۰ روز</option>
              </select>
              {errors.date && (
                <span
                  className="error-text"
                  style={{
                    color: "#dc3545",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  {errors.date}
                </span>
              )}
            </div>

            <div>
              <select
                value={offProductTitle}
                onChange={handleInputChange(setOffProductTitle, "product")}
                className={`option-select-box ${
                  errors.product ? "input-error" : ""
                }`}
                disabled={isLoading}
              >
                <option value="">
                  {isLoading ? "در حال بارگذاری..." : "محصول"}
                </option>
                {allProduct.map((product) => (
                  <option key={product.id} value={product.title}>
                    {product.title}
                  </option>
                ))}
              </select>
              {errors.product && (
                <span
                  className="error-text"
                  style={{
                    color: "#dc3545",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  {errors.product}
                </span>
              )}
            </div>
          </div>

          <button className="add-off" type="submit" disabled={isLoading}>
            {isLoading ? "در حال بارگذاری..." : "افزودن"}
          </button>
        </form>
      </div>

      <style jsx="true">{`
        .input-error {
          border-color: #dc3545 !important;
          background-color: #fff8f8;
        }

        .add-off:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
