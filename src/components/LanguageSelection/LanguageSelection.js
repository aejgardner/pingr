import React from 'react';

const LanguageSelection = ({ language, handleLanguage }) => (
    <>
        <div
            className="btn-group btn-group-toggle pt-1"
            data-toggle="buttons"
        >

            <label
                className={`btn btn-sm btn-info ${(language === "English") ? "active" : ""}`}
            >
                <input
                    type="radio"
                    name="options"
                    id="english"
                    onChange={handleLanguage}
                />
                English
          </label>
            <div className="btn btn-sm btn-secondary">
                <i class="fas fa-globe-americas"></i>
            </div>
            <label
                className={`btn btn-sm btn-info ${(language === "Esperanto") ? "active" : ""}`}
            >
                <input
                    type="radio"
                    name="options"
                    id="esperanto"
                    onChange={handleLanguage}
                />
                Esperanto
          </label>
        </div>
    </>
)

export default LanguageSelection;