import css from './FullComparison.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import comparisonData from './fullComparisonData.json'


const FullComparison = () => {
    return (
        <section className={css.fullComparisonSection}>
            <ContentWidth>
                <div className={css.sectionHeader}>
                    <span className={css.sectionLabel}>{comparisonData.label}</span>
                    <h2 className={css.sectionTitle}>{comparisonData.title}</h2>
                    <p className={css.sectionInfo}>{comparisonData.info}</p>
                </div>

                <div className={css.tableWrapper}>
                    <table className={css.comparisonTable}>
                        <thead>
                            <tr>
                                {comparisonData.columns.map((column) => (
                                    <th key={column.key} className={css.tableHeadCell}>
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {comparisonData.rows.map((row) => (
                                <tr key={row.factor} className={css.tableRow}>
                                    <td scope='row' className={css.factorCell}>
                                        {row.factor}
                                    </td>
                                    <td className={css.valueCell}>{row.buildFromScratch}</td>
                                    <td className={`${css.valueCell} ${css.highlightCell}`}>{row.icodelabs}</td>
                                    <td className={css.valueCell}>{row.icodelabsCustomBuild}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ContentWidth>
        </section>
    )
}

export default FullComparison