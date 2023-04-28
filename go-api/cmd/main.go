package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"go-api/internal/handlers"
	"net/http"
)

func main() {
	e := echo.New()
	events := e.Group("/events")
	events.Use(middleware.CORSWithConfig(middleware.DefaultCORSConfig))
	events.Use(middleware.Logger())

	e.GET("/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, "alive")
	})

	events.GET("", handlers.GetAll)
	events.GET("/:id", handlers.GetById)
	events.POST("", handlers.Create)
	events.PATCH("/:id", handlers.Update)
	events.DELETE("/:id", handlers.Delete)
	events.PATCH("/:id/rate", handlers.Rate)

	e.Start("localhost:50000")
}
