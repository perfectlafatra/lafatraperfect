.PHONY: verify frontend

frontend:
	cd frontend && npm ci && npm run verify

verify: frontend
