import React, { useState, useRef, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import OutsideAwayWrapper from "../helpers/OutsideAwayWrapper";

import {
  InputWrapper,
  InputFieldWrapper,
  Label,
  InputField,
  Arrow,
  Modal,
  OptionsWrapper,
  Option
} from "./InputWithModal.styles";

const InputWithModal = ({
  label,
  property,
  secondProperty,
  array,
  setStateProperty,
  Icons
}) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [value, changeValue] = useState("");

  const optionsList =
    array &&
    array
      .filter(item => {
        const filterProperty = secondProperty
          ? item[property][secondProperty]
          : item[property];
        if (filterProperty.includes(value)) {
          return item;
        }
        return null;
      })
      .map(item => {
        const filterProperty = secondProperty
          ? item[property][secondProperty]
          : item[property];
        return (
          <Option
            key={item.id}
            onClick={() => {
              setOpenModal(false);
              changeValue(filterProperty);
              setStateProperty(
                secondProperty ? secondProperty : property,
                filterProperty
              );
            }}
          >
            {filterProperty}
          </Option>
        );
      });

  const modalInput = useRef(null);
  useEffect(() => {
    if (isOpenModal && Icons) {
      modalInput.current.focus();
    }
  }, [Icons, isOpenModal]);

  return (
    <InputWrapper>
      <Label>{label}</Label>
      {isOpenModal && Icons ? (
        <OutsideAwayWrapper close={setOpenModal}>
          <Modal>
            <InputFieldWrapper>
              <i className="material-icons">search</i>
              <InputField
                ref={modalInput}
                type="text"
                value={value}
                onChange={e => {
                  setStateProperty(
                    secondProperty ? secondProperty : property,
                    e.target.value
                  );
                  changeValue(e.target.value);
                }}
              />
              <Arrow
                className="material-icons arrow"
                onClick={() => setOpenModal(false)}
              >
                keyboard_arrow_up
              </Arrow>
            </InputFieldWrapper>{" "}
            <OptionsWrapper>
              <Scrollbars>{optionsList}</Scrollbars>
            </OptionsWrapper>
          </Modal>
        </OutsideAwayWrapper>
      ) : (
        <InputFieldWrapper>
          {Icons ? <i className="material-icons">search</i> : null}
          <InputField
            type="text"
            value={value}
            onChange={e => {
              if (Icons) {
                setOpenModal(true);
              }
              changeValue(e.target.value);
              // eslint-disable-next-line no-unused-expressions
              setStateProperty(
                secondProperty ? secondProperty : property,
                e.target.value
              );
            }}
          />
          {Icons ? (
            <Arrow
              className="material-icons arrow"
              onClick={() => setOpenModal(true)}
            >
              keyboard_arrow_down
            </Arrow>
          ) : null}
        </InputFieldWrapper>
      )}
    </InputWrapper>
  );
};

export default InputWithModal;
