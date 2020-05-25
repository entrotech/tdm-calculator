/****** Object:  Index [IX_CalculationRule]    Script Date: 5/13/2020 8:07:55 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_CalculationRule] ON [dbo].[CalculationRule]
(
	[calculationId] ASC,
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO