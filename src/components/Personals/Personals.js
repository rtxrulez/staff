import React, { Component } from "react";
import css from "./Personals.module.css";
import PersonalsItem from "../PersonalsItem/PersonalsItem";
import { CommandBarButton, Stack, PrimaryButton } from "office-ui-fabric-react";

class Personals extends Component {
  render() {
    const {
      list,
      onEditItem,
      onDeleteItem,
      onAppend,
      onSortText,
      sortStatus
    } = this.props;

    const sortStatusType = sortStatus.type;

    return (
      <div>
        <div className={css.header}>
          <div className={css.filter}>
            <CommandBarButton
              className={css.btnSort}
              onClick={() => {
                onSortText("firstName");
              }}
              iconProps={{
                iconName: sortStatus.name === "firstName" ? sortStatusType : ""
              }}
              text="Имя"
            />

            <CommandBarButton
              className={css.btnSort}
              onClick={() => {
                onSortText("lastName");
              }}
              iconProps={{
                iconName: sortStatus.name === "lastName" ? sortStatusType : ""
              }}
              text="Фамилия"
            />

            <CommandBarButton
              className={css.btnSort}
              onClick={() => {
                onSortText("position");
              }}
              iconProps={{
                iconName: sortStatus.name === "position" ? sortStatusType : ""
              }}
              text="Должность"
            />

            <CommandBarButton
              className={css.btnSort}
              onClick={() => {
                onSortText("email");
              }}
              iconProps={{
                iconName: sortStatus.name === "email" ? sortStatusType : ""
              }}
              text="Email"
            />
            <CommandBarButton
              className={css.btnSort}
              onClick={() => {
                onSortText("cabinet");
              }}
              iconProps={{
                iconName: sortStatus.name === "cabinet" ? sortStatusType : ""
              }}
              text="Кабинет"
            />
          </div>
          <div className={css.append}>
            <PrimaryButton onClick={onAppend} text="Добавить"></PrimaryButton>
          </div>
        </div>
        <Stack horizontal className={css.personList}>
          {list.map((v, k) => {
            return (
              <PersonalsItem
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
                id={k}
                item={v}
                key={k}
              />
            );
          })}
        </Stack>
      </div>
    );
  }
}

export default Personals;
