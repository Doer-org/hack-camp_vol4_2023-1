package utils

import "os"

func GetEnv(path string, defaultEnv string) string {
	env := os.Getenv(path)
	if env == "" {
		return defaultEnv
	}
	return env
}
