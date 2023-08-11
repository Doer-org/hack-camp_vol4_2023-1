package config

import (
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

func Port() string {
	return utils.GetEnv("PORT", "8080")
}
