package handlers

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"go-api/internal/data"
	"net/http"
	"strconv"
)

func GetAll(c echo.Context) error {
	m := data.GetEventManagerInstance()
	return c.JSON(http.StatusOK, m.GetAll())
}

func GetById(c echo.Context) error {
	m := data.GetEventManagerInstance()
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		fmt.Printf("error: %v", err)
	}
	event, err := m.GetById(id)
	if err != nil {
		return c.String(http.StatusNotFound, fmt.Sprintf("event with id %v not found", id))
	}
	return c.JSON(http.StatusOK, event)

}

func Create(c echo.Context) error {
	m := data.GetEventManagerInstance()
	b := data.EventBody{}

	err := c.Bind(&b)
	if err != nil {
		fmt.Printf("error: %v", err)
	}

	return c.JSON(http.StatusCreated, m.Create(b))
}

func Update(c echo.Context) error {
	m := data.GetEventManagerInstance()
	b := data.EventBody{}
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		fmt.Printf("error: %v", err)
	}

	err = c.Bind(&b)
	if err != nil {
		fmt.Printf("error: %v", err)
	}
	event, err := m.Edit(b, id)
	if err != nil {
		return c.String(http.StatusNotFound, fmt.Sprintf("event with id %v not found", id))
	}
	return c.JSON(http.StatusOK, event)
}

func Delete(c echo.Context) error {
	m := data.GetEventManagerInstance()
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		fmt.Printf("error: %v", err)
	}
	m.Delete(id)
	return c.NoContent(http.StatusOK)
}

func Rate(c echo.Context) error {
	m := data.GetEventManagerInstance()
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		fmt.Printf("error: %v", err)
	}

	b := data.RateBody{}
	err = c.Bind(&b)

	if err != nil {
		fmt.Printf("error: %v", err)
	}

	return c.JSON(http.StatusOK, m.Rate(b, id))
}
